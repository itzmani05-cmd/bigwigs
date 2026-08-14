import * as THREE from "three";

/** Fixed-up-vector frame instead of Three's computeFrenetFrames, which twists
 * unpredictably (visible as a jagged/zigzag ribbon) on curves with inflection points
 * like our stream paths. A stable up vector avoids the flip since these curves never
 * run parallel to it. */
function buildStableFrames(curve: THREE.CatmullRomCurve3, segments: number) {
  const up = new THREE.Vector3(0, 1, 0);
  const fallback = new THREE.Vector3(1, 0, 0);
  const normals: THREE.Vector3[] = [];
  const binormals: THREE.Vector3[] = [];

  for (let i = 0; i <= segments; i++) {
    const tangent = curve.getTangentAt(i / segments);
    const reference = Math.abs(tangent.dot(up)) > 0.99 ? fallback : up;
    const normal = new THREE.Vector3().crossVectors(reference, tangent).normalize();
    const binormal = new THREE.Vector3().crossVectors(tangent, normal).normalize();
    normals.push(normal);
    binormals.push(binormal);
  }

  return { normals, binormals };
}

export function buildTaperedTubeGeometry(
  curve: THREE.CatmullRomCurve3,
  segments: number,
  radialSegments: number,
  startRadius: number,
  endRadius: number
) {
  const frames = buildStableFrames(curve, segments);
  const points = curve.getSpacedPoints(segments);
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  for (let i = 0; i <= segments; i++) {
    const p = points[i];
    const N = frames.normals[i];
    const B = frames.binormals[i];
    const radius = THREE.MathUtils.lerp(startRadius, endRadius, i / segments);

    for (let j = 0; j <= radialSegments; j++) {
      const v = (j / radialSegments) * Math.PI * 2;
      const sin = Math.sin(v);
      const cos = -Math.cos(v);

      const nx = cos * N.x + sin * B.x;
      const ny = cos * N.y + sin * B.y;
      const nz = cos * N.z + sin * B.z;
      const len = Math.hypot(nx, ny, nz) || 1;

      normals.push(nx / len, ny / len, nz / len);
      positions.push(p.x + radius * (nx / len), p.y + radius * (ny / len), p.z + radius * (nz / len));
    }
  }

  for (let i = 0; i < segments; i++) {
    for (let j = 0; j < radialSegments; j++) {
      const a = (radialSegments + 1) * i + j;
      const b = (radialSegments + 1) * (i + 1) + j;
      const c = (radialSegments + 1) * (i + 1) + j + 1;
      const d = (radialSegments + 1) * i + j + 1;
      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setIndex(indices);
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("normal", new THREE.Float32BufferAttribute(normals, 3));
  return geometry;
}
