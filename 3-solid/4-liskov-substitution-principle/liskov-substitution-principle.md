# Liskov Substitution Principle

~~~
If S is a subtype of T, then objects of type T in a program may be replaced with objects of type S without altering any of the desirable properties of that program.
~~~

In simpler words, derived classes must be substitutable for their base classes. That is, a program that uses a base class must be able to substitute a subclass without affecting the correctness of the program.


## Code analysis

This is very closely related to the **Strategy** pattern.

`CreditCardProcessor`, `DebitCardProcessor` and `BlikProcessor` all implement the same interface. Thanks to this we know that they all implement `process` function and we know it's arguments and return type.

So from the perspective of `PaymentService` it doesn't really matter what these classes do. All that matters is that they accept the same arguments and return the same type. They can be exchanged at will and it will have no effect on the `PaymentService` class.
