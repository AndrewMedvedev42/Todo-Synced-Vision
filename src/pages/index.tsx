import { NoteTable } from '../components/table';
import { FormDisabledDemo } from '../components/form'

export const MainPage:React.FC = () => {
    return (
        <section>
            <article className='p-3'>
                <h1>Your Notes</h1>
                <FormDisabledDemo/>
                <NoteTable/>
            </article>
        </section>
    )
}
