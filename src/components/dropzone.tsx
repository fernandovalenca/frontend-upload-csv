import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { ArrowUpTrayIcon } from "@heroicons/react/24/solid";

interface Props {
  onFileUploaded: (file: File) => void;
  selectedFile: File | null;
}

export default function Dropzone({
  onFileUploaded,
  selectedFile,
}: Props) {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const [file] = acceptedFiles;

      onFileUploaded(file);
    },
    [onFileUploaded]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "text/csv": [".csv"] },
  });

  return (
    <div
      className="mt-2 h-52 flex justify-center items-center rounded-lg border border-dashed border-gray-900/25"
      {...getRootProps()}
    >
      <div className="text-center">
        <ArrowUpTrayIcon
          className="mx-auto h-12 w-12 text-gray-300"
          aria-hidden="true"
        />
        <div className="mt-4 flex text-sm leading-6 text-gray-600">
          {selectedFile ? (
            <span className="font-semibold">Arquivo selecionado</span>
          ) : (
            <span className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
              Selecione um arquivo
            </span>
          )}
          <input
            id="file-upload"
            name="file-upload"
            type="file"
            className="sr-only"
            {...getInputProps()}
          />
          {selectedFile ? (
            <p className="pl-1">{selectedFile.name}</p>
          ) : (
            <p className="pl-1">ou arraste e solte</p>
          )}
        </div>
        {selectedFile ? (
          <p />
        ) : (
          <p className="text-xs leading-5 text-gray-600">.CSV</p>
        )}
      </div>
    </div>
  );
}
