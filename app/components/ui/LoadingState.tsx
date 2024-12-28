import Spinner from './Spinner';

export default function LoadingState() {
  return (
    <div className="flex flex-col items-center space-y-2">
      <Spinner />
      <span className="text-sm text-dodger">Uploading...</span>
    </div>
  );
}