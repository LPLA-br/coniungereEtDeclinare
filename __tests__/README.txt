testes com -tl- são testes de interface
pela biblioteca testin library

Recomendação da biblioteca:
Testing library:

What you should avoid with Testing Library

Testing Library encourages you to avoid testing implementation
details like the internals of a component you're testing (though
it's still possible). The Guiding Principles of this library
emphasize a focus on tests that closely resemble how your web pages
are interacted by the users.

You may want to avoid the following implementation details:

    Internal state of a component
    Internal methods of a component
    Lifecycle methods of a component
    Child components

Testes Unitários de métodos são realizados pelo jest
e não possuem o -tl- em seu nome.
