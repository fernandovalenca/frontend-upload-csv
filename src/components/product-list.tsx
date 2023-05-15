type Product = {
  code: number;
  name: string;
  cost_price: number;
  sales_price: number;
  new_price: number;
  error: string;
};

type Props = {
  products: Product[];
  handleUpdate: () => void;
};

export default function ProductList({ products, handleUpdate }: Props) {
  const hasError = products.some((produto) => produto.error !== null);

  return (
    <div className="relative overflow-x-auto mt-10 flex flex-col items-center justify-center gap-7">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
          <tr>
            <th scope="col" className="px-6 py-3">
              código
            </th>
            <th scope="col" className="px-6 py-3">
              nome do produto
            </th>
            <th scope="col" className="px-6 py-3">
              preço de custo
            </th>
            <th scope="col" className="px-6 py-3">
              preço de venda
            </th>
            <th scope="col" className="px-6 py-3">
              novo preço
            </th>
            <th scope="col" className="px-6 py-3">
              Observações
            </th>
          </tr>
        </thead>
        <tbody className="">
          {products.map((product) => (
            <tr key={product.code} className="bg-white">
              <td className="px-6 py-4">01</td>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {product.name}
              </th>
              <td className="px-6 py-4">{product.cost_price}</td>
              <td className="px-6 py-4">{product.sales_price}</td>
              <td className="px-6 py-4">{product.new_price}</td>
              <td className="px-6 py-4 text-red-500">{product.error}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        disabled={hasError}
        onClick={handleUpdate}
        className="rounded-md bg-indigo-600 px-3 py-2 text-sm disabled:cursor-not-allowed disabled:bg-slate-300 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Atualizar preços
      </button>
    </div>
  );
}
