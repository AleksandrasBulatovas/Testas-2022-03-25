import Joke from "../joke/Joke";
import Jdata from "../data/Jdata";

const Jokes = ()=>{
    return(
        <div className="container-fluid">
            <div className="px-lg-5">
                <div className="row">
                    {Jdata.map((joke)=>
                        <Joke
                            key={joke.id}
                            joke={joke.joke}
                            setup={joke.setup}
                            delivery={joke.delivery}                                                                     
                        />
                    
                    )}
                </div>
            </div>
        </div>
    )
}
export default Jokes