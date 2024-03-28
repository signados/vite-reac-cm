declare module '../hooks/useFetch' {
    export default function useFetch<T>(url: string): { data: T };
}