// Sem useSWR (jeito manual)
function Perfil1() {
  const [dados, setDados] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    axios.get('/api/usuario')
      .then(res => setDados(res.data))
      .catch(err => setErro(err))
      .finally(() => setCarregando(false));
  }, []);

  if (carregando) return <p>Carregando...</p>;
  if (erro) return <p>Erro!</p>;
  return <p>{dados.nome}</p>;
}

// Com useSWR
// Resolve o problema de gerenciar estado de requisições que normalmente se faria "na mão" com useState + useEffect (loading, erro, cache, revalidação, etc).
import useSWR from 'swr';
import axios from 'axios';

const fetcher = url => axios.get(url).then(res => res.data);

function Perfil2() {
  const { data, error, isLoading } = useSWR('/api/usuario', fetcher);

  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p>Erro!</p>;
  return <p>{data.nome}</p>;
}