function echo<T extends number | string>(value: T): T{
    return value;
};

echo(21);



interface Person {
    name: string
}

function echo2<T extends Person>(value: T): T {
    return value;
};

echo2({ name: 'a' });
