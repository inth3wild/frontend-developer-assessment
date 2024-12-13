import {
  CustomerOne,
  CustomerTwo,
  CustomerThree,
  CustomerFour,
  CustomerFive,
  CustomerSix,
  CustomerSeven,
} from '@assets/images';

const customers = [
  { id: 1, name: 'Ana Black', email: 'ana@gmail.com', avatar: CustomerOne },
  {
    id: 2,
    name: 'George Litz',
    email: 'georgelitz@gmail.com',
    avatar: CustomerTwo,
  },
  {
    id: 3,
    name: 'John Miller',
    email: 'jmiller@gmail.com',
    avatar: CustomerThree,
  },
  { id: 4, name: 'Jane Jonhson', email: 'jj@gmail.com', avatar: CustomerFour },
  {
    id: 5,
    name: 'Mezei Ágnes',
    email: 'fefekartika@gmail.com',
    avatar: CustomerFive,
  },
  {
    id: 6,
    name: 'Katona Beatrix',
    email: 'edobram@gmail.com',
    avatar: CustomerSix,
  },
  {
    id: 7,
    name: 'Halász Emese',
    email: 'jiloputri@yahoo.com',
    avatar: CustomerSeven,
  },
];

function CustomersList() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <h1 className="text-xl font-semibold mb-4">Customers List</h1>

      <ul className="space-y-4 overflow-y-auto max-h-[calc(100%-3rem)]">
        {customers.map(({ id, name, email, avatar }) => {
          return (
            <li key={id} className="flex items-center gap-3">
              <div className="shrink-0">
                <img
                  src={avatar}
                  alt={`customer-${id}`}
                  className="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h2 className="text-sm font-medium truncate">{name}</h2>
                <p className="text-sm text-gray-500 truncate">{email}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomersList;
