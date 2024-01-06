const SellerProduct = ({ product }) => {
  console.log(product);
  return (
    <div>
      <table className="lg:w-[50%] border-collapse">
        <thead className="bg-slate-200 rounded-3xl text-blue-600">
          <tr className="">
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Email
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Name
            </th>
            <th>Status</th>
            <th>Role</th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Action
            </th>
          </tr>
        </thead>
        {/* ------------------- Table Body------------------ */}
        <tbody className="w-full">
          {sellerRequest?.map((data) => (
            <tr key={data._id} className="">
              <td className="py-4 align-middle hover:shadow-xl duration-1000 shadow-gray-200 p-4">
                <div className="flex items-center gap-2">
                  <h1 className="text-base font-bold text-gray-600">
                    {data.email}
                  </h1>
                </div>
              </td>
              <td>{data.name}</td>
              <td>{data.status}</td>
              <td>{data.role}</td>
              <td className="py-4 align-middle">
                {/* <div className="flex items-center gap-3">
                  <button onClick={() => handelReject(data._id, data.email)}>
                    <GrClose></GrClose>
                  </button>
                  <button onClick={() => handelAccept(data._id, data.email)}>
                    <IoCheckmarkDoneSharp></IoCheckmarkDoneSharp>
                  </button>
                </div> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellerProduct;
