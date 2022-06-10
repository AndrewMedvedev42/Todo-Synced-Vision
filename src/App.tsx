import { Table } from 'components/table';
import { SubmitNoteForm } from 'components/form'

import './styles/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'antd/dist/antd.min.css';

function App() {
  return (
    <div className='App'>
      <article>
            <section className='p-3'>
                <h1 className='text-center'>Todolist App</h1>
                <section className='mb-4'>
                    <SubmitNoteForm/>
                </section>
            </section>
            <section>
                <section className='table-section'>
                    <Table is_completed={false}/>
                </section>
                <section className='table-section'>
                    <h2 className='text-center'>Done:</h2>
                    <Table is_completed={true}/>
                </section>
            </section>
        </article>
    </div>
  )
}

export default App;
