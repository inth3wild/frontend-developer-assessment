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
    <div>
      <h1>Customers List</h1>

      <ul>
        {customers.map(({ id, name, email, avatar }) => {
          return (
            <li key={id}>
              <div>
                <img src={avatar} alt={`customer-${id}`} />
              </div>
              <div>
                <h2>{name}</h2>
                <p>{email}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomersList;
