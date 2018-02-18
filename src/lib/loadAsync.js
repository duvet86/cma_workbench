import Loadable from "react-loadable";
import Loading from "common/Loading";

export default function loadAsync(component) {
  return Loadable({
    loader: component,
    loading: Loading,
    delay: 200,
    timeout: 10000
  });
}
