/** Display the flow of articles to scroll. default page. */
import { Card } from '../../components/Card/Card';
import { mockArticles } from "../../mock/mockArticles";

export const Articles =  () => {
    return (
        <div className='articlesContainer'>
            <ul>
                {Object.values(mockArticles).map((article) => (
                    <li key={article.id}>
                        <Card 
                            title={article.title}
                            body={article.body}
                            imageUrl={article.imageUrl}
                        />
                    </li>
                ))}
            </ul>
        <div>
            <h1>first article</h1>
        </div>
        <div>
            <h1>second article</h1>
        </div>
        <div>
            <h1>third artcile</h1>
        </div>
        </div>
    );
};