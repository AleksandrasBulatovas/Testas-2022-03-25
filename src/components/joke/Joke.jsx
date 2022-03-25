
const Joke = (props)=>{
    return(
        <div class="col-xl-3 col-lg-4 col-md-6 mb-4"><img src="https://images.pngnice.com/download/2007/Yellow-Laughing-Emoji-PNG-Clipart.png" alt="" class="img-fluid card-img-top"/>
        <div class="bg-white rounded shadow-sm">
            <div class="p-4">
                <p class="small text-muted mb-0">{props.joke}{props.setup} {props.delivery}</p>
                <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">                   
                </div>
            </div>
        </div>
    </div>

    )
}

export default Joke