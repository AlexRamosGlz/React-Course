import { useSearchParams } from "react-router-dom";

function useUrlPosition() {
  const [searchParamas] = useSearchParams();
  const lat = searchParamas.get("lat");
  const lng = searchParamas.get("lng");
  console.log(searchParamas)

  return [lat, lng];
}

export { useUrlPosition };
