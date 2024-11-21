# Liskov Substitution Principle

~~~
If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.
~~~

In simpler words, derived classes must be substitutable for their base classes. That is, a program that uses a base class must be able to substitute a subclass without affecting the correctness of the program.


## Code analysis

This is very closely related to the **Strategy** pattern.

`CreditCardProcessor`, `DebitCardProcessor` and `BlikProcessor` all implement the same interface. Thanks to this we know that they all implement `process` function and we know it's arguments and return type.

So from the perspective of `PaymentService` it doesn't really matter what these classes do. All that matters is that they accept the same arguments and return the same type. They can be exchanged at will and it will have no effect on the `PaymentService` class.

## Benefits

- **Code Reusability and Reduced Duplication**: LSP forces reusability. You can use the superclass object and substitute it with any of its subclasses without worrying about the system behaving unexpectedly
- **Enhanced Flexibility**: LSP allows you to make your code more flexible. You can introduce new subclasses without breaking existing functionality, because the contract defined by the superclass is honored by all subclasses
- **Lower Maintenance Cost**: codebases adhering to the LSP are easier to maintain. Changes to the superclass or subclass will be straightforward because the substitutability ensures a level of consistency in behavior
- **Improved Robustness**: because each payment processor adheres to the Applications are less prone to errors and unexpected behavior because the LSP helps avoid certain design anomalies that might arise from improper subclassing
