import {useState} from 'react';

const TransactionCard = () => {
    const [count, setCount] = useState(0);

    return (
        <h2>Card no {count}</h2>
    )
}

export default TransactionCard;