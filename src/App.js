
import './App.css';

function App() {
  return (
    <div className="App">
     
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <div className="flex w-full justify-between">
                <SideBar />
                <div className="grow h-[100vh]">
                  <Navbar />
                  <Outlet />
                </div>
              </div>
            }
          >
            
            <Route path="/home" element={<Home />} />
          </Route>
        </Routes>
      
      
    </div>
  );
}

export default App;
