import React from 'react';

const BookStore = () => {
  const books = [
    {
      id: 1,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      description: 'A story of self-discovery and following one’s dreams.',
      image: 'https://i.ibb.co/3d8JN34/18144590.jpg',
    },
    {
      id: 2,
      title: 'Sapiens: A Brief History of Humankind',
      author: 'Yuval Noah Harari',
      description: 'A book exploring the history and impact of humankind.',
      image: 'https://i.ibb.co/9NwWFS8/61i4k7-DWNFL-AC-UF1000-1000-QL80.jpg',
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
      description: 'A dystopian novel exploring the dangers of totalitarianism.',
      image: 'https://i.ibb.co/BqTt8gq/715-Wdn-BHq-YL-UF1000-1000-QL80.jpg',
    },
    {
      id: 4,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'A novel about racial injustice in the Deep South.',
      image: 'https://i.ibb.co/J34PRdc/images-q-tbn-ANd9-Gc-SIt-G5u7jojs-Qfo6t-DHq-Fj-Mh-Tg-AVMt2-Tb03-Q-s.jpg',
    },
    
  ];

  const featuredBooks = [
    {
      id: 1,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      description: 'A novel about the struggles of adolescence and societal expectations.',
      image: 'https://i.ibb.co/0ZrR7s2/BOOK126-A.jpg',
    },
    {
      id: 2,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      description: 'A classic dystopian novel about a future society.',
      image: 'https://i.ibb.co/mN11dcC/Brave-new-world-book-cover.jpg',
    },
    {
      id: 3,
      title: 'Harry Potter',
      author: 'Jk Rowling',
      description: 'Harry and Ron discover a giant snake, the Basilisk, in the Chamber of Secrets, and must destroy it to save Ginny Weasley..',
      image: 'https://i.ibb.co/ZWqYkCZ/81q77-Q39n-EL-AC-UF1000-1000-QL80.jpg',
    },
    {
      id: 3,
      title: 'You Can Win',
      author: 'Shiv Khera',
      description: ' Learn how to build trust by developing mutual respect with others .',
      image: 'https://i.ibb.co/mSwjg2V/71-KCBR2-Xkh-L.jpg',
    },
    
  ];

  return (
    <div>
      {/* Book Categories Section */}
      <section className="py-32 bg-gray-500 py-">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Book Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {books.map((book) => (
              <div key={book.id} className="bg-gray-600 p-6 rounded-lg shadow-lg">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-xl font-bold text-white">{book.title}</h3>
                <p className="text-white text-sm mb-2">{book.author}</p>
                <p className="text-white mb-4">{book.description}</p>
                {/* <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                  Add to Cart
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books Section */}
      <section className="py-16 bg-gray-400">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white text-center mb-8">Featured Books</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {featuredBooks.map((book) => (
              <div
                key={book.id}
                className="w-80 bg-gray-600 p-6 rounded-lg shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-white">{book.title}</h3>
                <p className="text-white text-sm mb-2">{book.author}</p>
                <p className="text-white mb-4">{book.description}</p>
                {/* <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-300">
                  Buy Now
                </button> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookStore;
