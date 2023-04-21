
  import { toast} from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  interface ToastProps{
    message:string
    type:string
  }
  
  export function Toastify({message}:ToastProps){
    toast.success(`${message}`, {     
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "dark",
      });
  }