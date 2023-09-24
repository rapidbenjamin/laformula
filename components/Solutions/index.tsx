import Solution from './Solution';
import Management from './Management';

export default function Solutions() {
  
    return (
      <>
        <div className=""
          style={{
            backgroundImage: "url('/images/texture/texture.png')", 
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        >
            <Solution/>
            <Management/>
        </div>
      </>
    )
  }