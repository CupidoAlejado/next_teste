import { useRouter } from 'next/router'
import { Container } from 'react-bootstrap'

export default function Page() {
    const router = useRouter()
    return <>
        <Container className="text-center">
            <h1>Pesquisa: {router.query.id}</h1>
            <button type="button" onClick={() => router.push('/' + router.query.id + '')}>
               A
            </button>
        </Container>
    </>
}