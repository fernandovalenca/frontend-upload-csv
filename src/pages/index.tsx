import { useState, FormEvent, useCallback, useEffect } from "react";
import { axiosHttpClientAdapter } from "@/core/infra/protocols/http/axios-http-client-adapter";
import Dropzone from "@/components/dropzone";
import ProductList from "@/components/product-list";
import MessageDialog from "@/components/dialog";

export default function Home() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState({ title: "", description: "" });
  const [products, setProducts] = useState([]);

  const handleValidate = useCallback(
    async (event: FormEvent) => {
      event.preventDefault();

      if (selectedFile) {
        const data = new FormData();

        data.append("file", selectedFile);

        try {
          const response = await axiosHttpClientAdapter.request({
            headers: {
              "Content-Type": "multipart/form-data",
            },
            method: "POST",
            url: "/validate",
            body: data,
          });

          setProducts(response.data);
        } catch (error: any) {
          setMessage({
            title: "Unexpected error",
            description: error.message,
          });
          setOpen(true);

          console.log(error);
        }
      }
    },
    [selectedFile]
  );

  const handleUpdate = useCallback(async () => {
    if (selectedFile) {
      const data = new FormData();

      data.append("file", selectedFile);

      try {
        await axiosHttpClientAdapter.request({
          headers: {
            "Content-Type": "multipart/form-data",
          },
          method: "PATCH",
          url: "/update",
          body: data,
        });

        setMessage({
          title: "Atualização realizada!",
          description: "Você já pode incluir um novo arquivo!",
        });
        setSelectedFile(null)
        setOpen(true)
      } catch (error: any) {
        setMessage({
          title: "Unexpected error",
          description: error.message,
        });
        setOpen(true);
        console.log(error);
      }
    }
  }, [selectedFile]);

  const handleClearFile = () => {
    setSelectedFile(null);
    setProducts([]);
  };

  useEffect(() => {
    setProducts([]);
  }, [selectedFile]);

  return (
    <main className="flex items-center flex-col">
      <form className="w-full max-w-xl mt-10" onSubmit={handleValidate}>
        <div className="col-span-full">
          <label
            htmlFor="file-upload"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Arquivo de atualização
          </label>
          <Dropzone
            onFileUploaded={setSelectedFile}
            selectedFile={selectedFile}
          />
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-red-500"
            onClick={handleClearFile}
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={!selectedFile}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:bg-slate-300 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Validar
          </button>
        </div>
      </form>
      {!!products.length && selectedFile && (
        <ProductList products={products} handleUpdate={handleUpdate} />
      )}
      <MessageDialog open={open} setOpen={setOpen} message={message} />
    </main>
  );
}
