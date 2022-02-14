import HeroBlog from "../components/HeroBlog"
import SubHero  from "../components/SubHeroblog"
import ArticleContainer from "../components/ArticleContainer"
import "../assets/css/blog-area.css"
import "../assets/css/blogindi copy.css"
const Main =()=>{
    return (
        <div class="main-article-container">
            <HeroBlog/>
            <SubHero/>
            <ArticleContainer/>
        </div>
    )
}

export default Main