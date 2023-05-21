import React from 'react';
import usePageTitle from '../Utilitis/usePageTitle';

const Blogs = () => {
    usePageTitle('Modern Toys||Blogs')
    return (
        <div>
            <h1 className='text-center font-bold text-3xl mt-8 mb-5'>Welcome to our blogs</h1>
            <div>
                <h1 className='text-lg font-bold mb-3'>1 . What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                <p>
                    <strong>Answerer : </strong> An access token and a refresh token are components of an authentication mechanism.

                    An access token is a credential issued upon successful authentication that grants access to protected resources. It has a limited lifespan and is used to make authenticated requests.

                    A refresh token is a long-lived credential that is not included in API requests. It is used to obtain a new access token when the current one expires, without requiring re-authentication. Refresh tokens have a longer validity period and can be used multiple times.

                    On the client-side, it is crucial to securely store these tokens. It is not recommended to store them in client-side storage mechanisms like cookies or local storage due to potential vulnerabilities. Instead, it is best to store them in an HTTP-only secure cookie provided by the authentication service or in a secure storage mechanism like the browser secure token storage. This ensures that the tokens are protected from unauthorized access while allowing them to be sent automatically with each request to the server.
                </p>
            </div>
            <div>
                <h1 className='text-lg font-bold mb-3 mt-5'>2 . Compare SQL and NoSQL databases?</h1>
                <p>
                    <strong>Answerer : </strong> SQL and NoSQL databases differ in their data models, scalability, query languages, schema flexibility, ACID compliance, and use cases. SQL databases follow a relational data model with predefined schemas, while NoSQL databases offer flexible data models like key-value, document, columnar, or graph. SQL databases scale vertically and may require additional effort for horizontal scalability, whereas NoSQL databases are designed for easy horizontal scalability. SQL databases use the SQL language for querying, while NoSQL databases often have their query languages. SQL databases have rigid schemas, while NoSQL databases offer flexible schemas. SQL databases prioritize ACID compliance and strong consistency, while NoSQL databases may sacrifice some ACID properties for scalability and performance, providing eventual or relaxed consistency. SQL databases are ideal for applications requiring complex querying and structured data, while NoSQL databases excel in handling unstructured or rapidly changing data. However, there are hybrid solutions that combine elements from both approaches based on specific project requirements.
                </p>
            </div>
            <div>
                <h1 className='text-lg font-bold mb-3 mt-5'>3 . What is express js? What is Nest JS?</h1>
                <p>
                    <strong>Answerer : </strong> Express.js is a lightweight and flexible framework, while Nest.js builds on top of Express.js to provide a more opinionated and structured approach to building Node.js applications.Express.js offers a simple and flexible way to build web applications and APIs, allowing developers to have full control over their application design and structure. Express.js is known for its unopinionated approach and has a large ecosystem of plugins and extensions.

                    Nest.js is a progressive Node.js framework inspired by Angular. It is designed for building efficient, scalable, and maintainable server-side applications. Nest.js combines elements of OOP, FP, and Reactive Programming and emphasizes decorators, TypeScript, and dependency injection.
                </p>
            </div>
            <div>
                <h1 className='text-lg font-bold mb-3 mt-5'>4 . What is express js? What is Nest JS?</h1>
                <p>
                    <strong>Answerer : </strong> The MongoDB aggregation framework is a feature that allows you to perform advanced data processing operations on your MongoDB collections. It works by using a pipeline of stages that sequentially process the input documents. Each stage performs a specific operation and passes the results to the next stage. Common stages include filtering documents, reshaping fields, grouping documents, sorting, joining with other collections, and more. The aggregation framework is executed on the MongoDB server, providing efficient processing and optimization. It is useful for tasks such as generating reports, data analysis, and deriving insights from MongoDB data. Overall, it offers a flexible and powerful way to process and analyze data within MongoDB.
                </p>
            </div>
        </div>
    );
};

export default Blogs;