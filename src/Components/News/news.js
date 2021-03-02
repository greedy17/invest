import React, {useState, useEffect} from 'react';
import {Card,Button,Jumbotron,Image,Container} from 'react-bootstrap';
import {ImGithub, ImTwitter,ImInstagram} from 'react-icons/im';
import logo from '../../assets/images/whiteLogo.png';
import axios from 'axios';
import './news.css';

const News = props => {

    const [newsArticles, setNewsArticles] = useState([])

    useEffect(() => {

    const options = {
        method: 'GET',
        url: 'https://bloomberg-market-and-financial-news.p.rapidapi.com/stories/list',
        params: {template: 'CURRENCY', id: 'usdjpy'},
        headers: {
          'x-rapidapi-key': 'c616cc18famshd753fa7c6df1b2cp1745c6jsnf522188cc252',
          'x-rapidapi-host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
        }
      };
    
        axios.request(options).then(function (response) {
            console.log(response.data);
            setNewsArticles(response.data.stories);
        }).catch(function (error) {
            console.error(error);
        });
     }); 

    return(
        <div className="main-page">

            <div className="news-section">
                <Jumbotron className="articles">
                    {newsArticles.map(story =>
                    <Card className="article-card" style={{ width: '14rem'}}>
                        <Card.Img variant="top" src={story.thumbnailImage} />
                        <Card.Body>
                            <Card.Title><Image src={logo} height={40}/></Card.Title>
                            <Card.Text>
                                {story.title}
                            </Card.Text>
                            <Button className="article-button" href={story.shortURL} variant="primary">Check it out</Button>
                        </Card.Body>
                    </Card>)}
                </Jumbotron>
            </div>

            <Jumbotron className="featured">       
                   <div>
                   <Card className="text-center featured-card">
                        <Card.Header className="featured-title">Featured Product</Card.Header>
                        <Card.Body>
                            <Card.Title className="featured-title2">Featured product title</Card.Title>
                            <Card.Text>
                            Featured product description.Featured product description.Featured product description.
                            </Card.Text>
                            <Button className="featured-button">View Product</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">{Date.now()}</Card.Footer>
                    </Card>  
                   </div>
            </Jumbotron>

            <Jumbotron className="trending">
                <Container>
                    <h1 className="story-titles">The Top 6 Financial Services Industry Trends</h1>
                    <p className="story-date">March 1, 2021</p>
                    <p>For too long, banks and other financial institution (FI) organizations have struggled to keep up with the consumer marketing and versatility of loyalty enablement relative to other industries. This year, however, will see a massive shift in how banks build out their customer growth and retention strategies through personalized customer journeys and experiences. Here are the top 6 trends we see happening in the financial services industry, and how they’ll impact the loyalty landscape.</p>
                    <h1>1. Hyper-Personalization</h1>
                    <p>Generation Z will become mainstream customers of banks. This emerging generation of consumers expect to be treated as individuals and not as segments, which means banks need to incorporated a much stronger form of personalization – what we term hyper-personalization. This personalization might take the form of allowing the customer to design their own suite of banking products based on their circumstance, needs and preferences to selecting which specific benefits they wish to receive from a broad selection of banking features and benefits. This is the opposite a one-size-fits-all approach.</p>
                    <h1>2. Hyper-Personalization</h1>
                    <p>Generation Z will become mainstream customers of banks. This emerging generation of consumers expect to be treated as individuals and not as segments, which means banks need to incorporated a much stronger form of personalization – what we term hyper-personalization. This personalization might take the form of allowing the customer to design their own suite of banking products based on their circumstance, needs and preferences to selecting which specific benefits they wish to receive from a broad selection of banking features and benefits. This is the opposite a one-size-fits-all approach.</p>
                    <h1>3. Hyper-Personalization</h1>
                    <p>Generation Z will become mainstream customers of banks. This emerging generation of consumers expect to be treated as individuals and not as segments, which means banks need to incorporated a much stronger form of personalization – what we term hyper-personalization. This personalization might take the form of allowing the customer to design their own suite of banking products based on their circumstance, needs and preferences to selecting which specific benefits they wish to receive from a broad selection of banking features and benefits. This is the opposite a one-size-fits-all approach.</p>
                    <h1>4. Hyper-Personalization</h1>
                    <p>Generation Z will become mainstream customers of banks. This emerging generation of consumers expect to be treated as individuals and not as segments, which means banks need to incorporated a much stronger form of personalization – what we term hyper-personalization. This personalization might take the form of allowing the customer to design their own suite of banking products based on their circumstance, needs and preferences to selecting which specific benefits they wish to receive from a broad selection of banking features and benefits. This is the opposite a one-size-fits-all approach.</p>
                    <h1>5. Hyper-Personalization</h1>
                    <p>Generation Z will become mainstream customers of banks. This emerging generation of consumers expect to be treated as individuals and not as segments, which means banks need to incorporated a much stronger form of personalization – what we term hyper-personalization. This personalization might take the form of allowing the customer to design their own suite of banking products based on their circumstance, needs and preferences to selecting which specific benefits they wish to receive from a broad selection of banking features and benefits. This is the opposite a one-size-fits-all approach.</p>
                    <h1>6. Hyper-Personalization</h1>
                    <p>Generation Z will become mainstream customers of banks. This emerging generation of consumers expect to be treated as individuals and not as segments, which means banks need to incorporated a much stronger form of personalization – what we term hyper-personalization. This personalization might take the form of allowing the customer to design their own suite of banking products based on their circumstance, needs and preferences to selecting which specific benefits they wish to receive from a broad selection of banking features and benefits. This is the opposite a one-size-fits-all approach.</p>
                    <div className="spacer"></div>
                    <h1 className="story-titles">Tips For Choosing The Right Investment</h1>
                    <p className="story-date">March 1, 2021</p>
                    <h1>1. Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                    <h1>2. Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                    <h1>3. Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                    <h1>4. Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                    <h1>5. Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                    <h1>6. Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                    <h1>7. Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                    <h1>8. Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                </Container>
            </Jumbotron>
            
            <div className="main-footer">
                <div className="center">
                    <h4 className="connect">Connect with us!</h4>
                    <div className="icons">
                        <ImGithub href="https://github.com/greedy17/invest"/><ImTwitter className="foot-icons"/><ImInstagram className="foot-icons"/>
                    </div>
                </div>                      
                <p className="text-center copy">Copyright &copy;<span><Image src={logo} height={20}/></span>2021</p>
            </div>
        
            <div>
            </div>
        </div>
    ) 

}

export default News;