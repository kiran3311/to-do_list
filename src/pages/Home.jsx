import TodoList from '../components/TodoList/TodoList';

const Home = () => {
    console.log('Home Component =======>>');
    return (
    <><div className='home'>
        <h1> TO-DO List</h1>
        <TodoList />
        </div>
    </>
)};

export default Home;