import { useRef, useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";

interface ResumeUploadProps {
  file: File | null;
  onChange: (file: File | null) => void;
  error?: string;
}

const ACCEPTED = [".pdf", ".doc", ".docx"];

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default function ResumeUpload({ file, onChange, error }: ResumeUploadProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (files: FileList | null) => {
    const picked = files?.[0];
    if (picked) onChange(picked);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-slate-700">
        Resume / CV <span className="font-normal text-slate-400">(Optional)</span>
      </label>

      <div
        role="button"
        tabIndex={0}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setIsDragging(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click();
        }}
        className={`group relative flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed px-6 py-10 text-center transition-all duration-300 ${
          isDragging
            ? "border-brand-blue-500 bg-brand-blue-50/60"
            : error
              ? "border-rose-300 bg-rose-50/30"
              : "border-slate-200 bg-white/50 hover:border-brand-blue-300 hover:bg-brand-blue-50/30"
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPTED.join(",")}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        {file ? (
          <div
            className="flex items-center gap-3 rounded-xl bg-white px-4 py-2.5 shadow-sm"
            onClick={(e) => e.stopPropagation()}
          >
            <FileText size={20} className="text-brand-blue-500" />
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-900">{file.name}</p>
              <p className="text-xs text-slate-400">{formatSize(file.size)}</p>
            </div>
            <button
              type="button"
              onClick={() => onChange(null)}
              aria-label="Remove file"
              className="ml-2 flex h-6 w-6 items-center justify-center rounded-full text-slate-400 transition-colors duration-200 hover:bg-slate-100 hover:text-rose-500"
            >
              <X size={14} />
            </button>
          </div>
        ) : (
          <>
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue-50 text-brand-blue-500 transition-transform duration-300 group-hover:-translate-y-1">
              <UploadCloud size={26} strokeWidth={1.75} />
            </span>
            <div>
              <p className="text-sm font-semibold text-slate-700">
                <span className="text-brand-blue-600">Click to upload</span> or drag & drop
              </p>
              <p className="mt-1 text-xs text-slate-400">PDF, DOC, DOCX &middot; Max size 10MB</p>
            </div>
            <span className="mt-1 inline-flex items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-slate-600 transition-colors duration-300 group-hover:border-brand-blue-400 group-hover:text-brand-blue-600">
              Browse Files
            </span>
          </>
        )}
      </div>
      {error ? (
        <span className="text-xs font-medium text-rose-500">{error}</span>
      ) : (
        <span className="text-xs text-slate-400">We accept PDF, DOC, and DOCX files up to 10MB.</span>
      )}
    </div>
  );
}
