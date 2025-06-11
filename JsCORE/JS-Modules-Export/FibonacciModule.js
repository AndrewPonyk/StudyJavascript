function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}
export function calculateSum(a, b) {
    return a + b;
}

// --- Named Export ---
export function calculateProduct(a, b) {
    return a * b;
}

// --- Default Export (Експорт за замовчуванням) ---
// Можна експортувати функцію як default
const greetUser = (name) => `Привіт, ${name}!`;
export { greetUser };

export default fibonacci;