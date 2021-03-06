import React, {useState, useEffect} from 'react';
import {Card,Button,Jumbotron,Image,Container,Carousel} from 'react-bootstrap';
import {ImGithub, ImTwitter,ImInstagram} from 'react-icons/im';
import logo from '../../assets/images/whiteLogo.png';
import axios from 'axios';
import './news.css';

const News = props => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

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
                    <Card className="article-card" style={{ width: '16rem'}}>
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
            <Carousel fade>
                <Carousel.Item className="item">
                <Card className="text-center featured-card">
                        <Card.Header className="featured-title">Featured Product</Card.Header>
                        <Card.Body>
                            <Card.Title className="featured-title2">Featured product title</Card.Title>
                            <Card.Text>
                            Featured product description.Featured product description.Featured product description.
                            </Card.Text>
                            <Button className="featured-button">View Product</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Carousel.Item>
                <Carousel.Item className="item" >
                <Card className="text-center featured-card">
                        <Card.Header className="featured-title">Featured Product</Card.Header>
                        <Card.Body>
                            <Card.Title className="featured-title2">Featured product title</Card.Title>
                            <Card.Text>
                            Featured product description.Featured product description.Featured product description.
                            </Card.Text>
                            <Button className="featured-button">View Product</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Carousel.Item>
                <Carousel.Item className="item">
                <Card className="text-center featured-card">
                        <Card.Header className="featured-title">Featured Product</Card.Header>
                        <Card.Body>
                            <Card.Title className="featured-title2">Featured product title</Card.Title>
                            <Card.Text>
                            Featured product description.Featured product description.Featured product description.
                            </Card.Text>
                            <Button className="featured-button">View Product</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Carousel.Item>
            </Carousel>       

            </Jumbotron>
            
            <Jumbotron className="trending container">
                <Container>
                    <h1 className="news-titles">The Top 6 Financial Services Industry Trends</h1>
                    <p className="story-date">{today}</p>
                    <p>For too long, banks and other financial institution (FI) organizations have struggled to keep up with the consumer marketing and versatility of loyalty enablement relative to other industries. This year, however, will see a massive shift in how banks build out their customer growth and retention strategies through personalized customer journeys and experiences. Here are the top 6 trends we see happening in the financial services industry, and how they’ll impact the loyalty landscape.</p>
                    <h1 className="news-titles">Hyper-Personalization</h1>
                    <p>Generation Z will become mainstream customers of banks. This emerging generation of consumers expect to be treated as individuals and not as segments, which means banks need to incorporated a much stronger form of personalization – what we term hyper-personalization. This personalization might take the form of allowing the customer to design their own suite of banking products based on their circumstance, needs and preferences to selecting which specific benefits they wish to receive from a broad selection of banking features and benefits. This is the opposite a one-size-fits-all approach.</p>
                    <h1 className="news-titles">“Whole-of-Bank” Loyalty</h1>
                    <p>Banks are facing the challenge of treating customer loyalty as part of an overall relationship with the bank and not as part of a single product feature (e.g. credit cards). This relationship extends well beyond a credit card and should include all products and services that a customer consumes, whether from the retail bank, the business bank or a wealth product such as insurance or investment products. Think of this in the context of Apple, which has been able to cement brand loyalty by offering excellent products and customer service across the entire relationship. Consumers will demand similar experiences from banks.</p>
                    <h1 className="news-titles">Digital Transformation</h1>
                    <p>The financial services industry is witnessing a continued and aggressive focus on digitization and the adoption of new and emerging technologies to bring in operational efficiencies, enhance speed-to-market and deliver superior customer experiences. Banks are cutting down spending on branches to invest in self-service digital channels as mobile and online banking become more popular among customers. Digital wearable devices, which pack the power of smartphones, are making it increasingly feasible for banks to offer targeted services to customers.</p>
                    <h1 className="news-titles">Collaboration with Fintechs</h1>
                    <p>Banks’ legacy systems are their biggest barrier to growth and technological innovation. As a result, many banks are partnering with FinTech companies to build out their digital experience. Initially, Fintechs were seen as competitors taking advantage of the void that was created by the financial services industry’s inability to keep up with technological breakthroughs. Today, however, bank/Fintech partnerships are increasingly the norm, with the latter providing marketing, administration, loan servicing or other services enabling banks to offer tech-enabled banking products, features and benefits. As a result, these partnerships are beginning to re-shape the financial services landscape.</p>
                    <h1 className="news-titles">Robotics and AI</h1>
                    <p>While customer needs and competitive forces demand that banks adopt full-fledged digitization, performance pressures compel lenders to reduce costs and keep operating margins healthy. As new regulatory requirements and data protection laws put additional strains on already-stretched resources, emerging technologies such as AI and robotics are helping banks address these constraints efficiently. In fact, many pioneering companies in the FS industry are already experimenting with multiple use cases of AI in their operations. From using AI to power chatbots and providing round-the-clock agile customer service, to utilizing the technology for critical functions such as anti-fraud and regulatory compliance, banks are realizing the double benefits of optimizing costs while improving operations. These technologies are also triggering innovations in the industry, such as biometric-based authentications, voice commerce and robo-advisors.</p>
                    <h1 className="news-titles">Focus on User Experience (UXP)</h1>
                    <p>Human-centered design has gained a strong following in technology and product designs over the last decade. Importantly, the emergence of challenger/neo-banks with human-centered UX design is forcing banks to focus on the adoption of design-thinking methodologies. Banks are now more aware that it’s not enough to create usable interfaces to ensure user-centered approaches in their banking service delivery. Banks are beginning to understand what kind of experience they want customers to experience at every touch point of digital interaction with their users.</p>
                    <div className="spacer"></div>
                    <h1 className="news-titles">Tips For Choosing The Right Investment</h1>
                    <p className="story-date">{today}</p>
                    <h1 className="news-titles">Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                    <h1 className="news-titles">Consider how long you can invest</h1>
                    <p>Think about how soon you need to get your money back. Time frames vary for different goals and will affect the type of risks you can take on. </p>
                    <h1 className="news-titles">Make an investment plan</h1>
                    <p>Once you’re clear on your needs and goals – and have assessed how much risk you can take – draw up an investment plan. This will help you identify the types of product that could be suitable for you. A good rule of thumb is to start with low risk investments such as Cash ISAs. Then, add medium-risk investments like unit trusts if you’re happy to accept higher volatility. Only consider higher risk investments once you’ve built up low and medium-risk investments. Even then, only do so if you are willing to accept the risk of losing the money you put into them.</p>
                    <h1 className="news-titles">Diversify!</h1>
                    <p>It’s a basic rule of investing that to improve your chance of a better return you have to accept more risk. But you can manage and improve the balance between risk and return by spreading your money across different investment types and sectors whose prices don’t necessarily move in the same direction – this is called diversifying. It can help you smooth out the returns while still achieving growth, and reduce the overall risk in your portfolio.</p>
                    <h1 className="news-titles">Decide how hands-on to be</h1>
                    <p>Investing can take up as much or as little of your time as you’d like.</p>
                    <h1 className="news-titles">Check the charges</h1>
                    <p>If you buy investments, like individual shares, direct, you will need to use a stockbroking service and pay dealing charges. If you decide on investment funds, there are charges, for example to pay the fund manager. And, if you get financial advice, you will pay the adviser for this. Whether you’re looking at stockbrokers, investment funds or advisers, the charges vary from one firm to another. Ask any firm to explain all their charges so you know what you will pay, before committing your money. While higher charges can sometimes mean better quality, always ask yourself if what you’re being charged is reasonable and if you can get similar quality and pay less elsewhere.</p>
                    <h1 className="news-titles">Review your needs and goals</h1>
                    <p>It’s well worth taking the time to think about what you really want from your investments. Knowing yourself, your needs and goals and Your appetite for risk is a good start, so start by filling in a Money fact find.</p>
                    <h1 className="news-titles">Review periodically</h1>
                    <p>Regular reviews – say, once a year – will ensure that you keep track of how your investments are performing and adjust your savings as necessary to reach your goal.</p>
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