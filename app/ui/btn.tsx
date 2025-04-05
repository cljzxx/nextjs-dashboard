import { fetchCustomers } from '@/app/lib/data';

export async function Btn({ name }: { name: string }) {
  const customers = await fetchCustomers();
  console.log(customers);
  return (
    <>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
      <button className=" w-5 h-5 p-8 flex justify-center items-center rounded-md hover:bg-zinc-900 bg-slate-700 text-white">
        {name}
      </button>
    </>
  );
}
