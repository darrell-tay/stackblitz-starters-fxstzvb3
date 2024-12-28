export default function Spinner() {
  return (
    <div className="inline-block animate-spin rounded-full h-4 w-4 border-2 border-dodger border-t-transparent" 
         role="status" 
         aria-label="Loading">
      <span className="sr-only">Loading...</span>
    </div>
  );
}