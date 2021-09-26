import { useState, useEffect } from 'react';
import './App.css';
import Carousel from './Carousel/carousel';
//@ts-ignore
import { SelectInput, View, Grid, Row, Col, Flex, Block, Text, Link, Inline } from 'vcc-ui'
import { API_URL } from './config';
import { useApiData, Car, BodyType } from './hooks/useApiData';

function App() {
  const { error, isLoading, data } = useApiData(API_URL)
  const [filteredCars, setFilteredCars] = useState<Car[]>([])
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (filter) {
      setFilteredCars(data.filter((car) => car.bodyType === filter));
    } else {
      setFilteredCars(data)
    }
  }, [filter, data]);  

  return (
    <main className="page-content">
      <View>
        <Grid>
          <Row>
            <Col size={4}>
              <SelectInput
                value={filter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilter(e.target.value)}
                label="Filtrera på biltyp"
              >
                <option value="">Inget filter</option>
                <option value={BodyType.ESTATE}>Estate</option>
                <option value={BodyType.SEDAN}>Sedan</option>
                <option value={BodyType.SUV}>Suv</option>              
              </SelectInput> 
            </Col>
          </Row>
          <Row>
            <Col>
              <Block extend={{ paddingTop: '4rem' }}>
                {error && <div>{error.message}</div>}
                {isLoading && <div>Loading...</div>}
                <Carousel>
                  {filteredCars.map((car) => {
                    return (
                      <article className="car-slide" key={car.id}>
                        <Flex>
                          <Block>
                            {/* @ts-ignore */}
                            <Text className="body-type" extend={({ theme }) => ({
                              color: theme.color.primitive.grey200,
                              fontWeight: theme.font.weight.medium,
                              textTransform: 'uppercase'
                            })}>{car.bodyType}</Text>
                          </Block>
                          {/* @ts-ignore */}
                          <Block extend={({ theme }) => ({
                              fontFamily: theme.font.family['volvo-novum'],
                              paddingBottom: '1rem'
                            })}>
                            {/* @ts-ignore */}
                            <Text as="span" extend={({ theme }) => ({
                              fontWeight: theme.font.weight.medium,
                              display: 'inline-block'
                            })}>
                              {car.modelName}
                            </Text> 
                            {' '}
                            {/* @ts-ignore */}
                            <Text as="span" extend={({ theme }) => ({
                              color: theme.color.primitive.grey200,
                              display: 'inline-block'
                            })}>
                              {car.modelType}
                            </Text>
                          </Block>
                          <figure className="car-image-figure">
                            <img alt={car.modelName} className="car-image" src={car.imageUrl} />
                          </figure>
                          {/* @ts-ignore */}
                          <View display="flex" justifyContent="center" direction="row">
                            <Inline extend={{
                              marginRight: '1rem'
                            }}>
                              <Link className="learn-link" href={`/learn/${car.id}`} arrow="right">Learn</Link>
                            </Inline>
                            <Link className="shop-link" href={`/shop/${car.id}`} arrow="right">Shop</Link>
                          </View>
                        </Flex>
                      </article>
                    )
                  })}
                </Carousel>
              </Block>
            </Col>
          </Row>
        </Grid>
      </View>
    </main>
  );
}

export default App;
