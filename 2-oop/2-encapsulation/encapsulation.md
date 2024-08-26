# Encapsulation  

Encapsulation is a fundamental principle that involves bundling the data (attributes) and methods (functions or procedures) that operate on the data into a single unit, known as a class. Encapsulation also controls access to the data by restricting direct access to some components of an object, which is typically achieved through access modifiers. 

## Key points about encapsulation

- **Data Hiding**: encapsulation allows a class to hide its internal data and only expose what is necessary. This is typically achieved using access modifiers like private, protected, and public, which control the visibility of class members.
- **Access Control**: members market as `private` are only accessible by the class itself, `protected` members can be accessed by the class and all her subclasses, `public` members have no access restrictions.
- **Controlled Interaction**: By restricting access to certain parts of an object, encapsulation ensures that an object's internal state can only be changed in controlled ways, often through public methods called getters and setters.

## Benefits of encapsulation

- **Modularity**: encapsulation allows each object to be self-contained, making the system more modular
- **Maintainability**: since the internal implementation is hidden, it can be changed without affecting other parts of the code that use the class
- **Security**: encapsulation protects the object's state from unintended interference
