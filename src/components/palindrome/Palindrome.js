import { useState } from "react";

function check_palindrome(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i];
        let y = str[j - i];
        if (x !== y) {
            return false;
        }
    }
    return true;
}

const Palindrome = () => {
    const [text, setText] = useState('');
    const [palindrome, setPalindrome] = useState(false);

    const handleChangePalindrome = (value) => {
        const isAPalindrome = check_palindrome(value);
        setPalindrome(isAPalindrome);
    }

    const handleChangeText = (e) => {
        setText(e.target.value);
        handleChangePalindrome(e.target.value);
    }
    return (
        <>
            <h1>Palindrome checker</h1>
            <label>
                Text input: <input value={text} onChange={handleChangeText} />
            </label>
            {
                text.length > 0 ? (
                    <p>{text} {palindrome === true ? ' is a palindrome' : ' is not a palindrome'}</p>
                ) : (
                    <p>Please enter some text</p>
                )
            }
        </>
    )
}

export default Palindrome;