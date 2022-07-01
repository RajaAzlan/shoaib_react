import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import cardStyles from '@/assets/scss/layout/_card.module.scss';
import loginStyles from '@/assets/scss/pages/_login.module.scss';
import LoginForm from '@/components/LoginForm';

const Login = () => {
  return (
    <section className={loginStyles.login}>
      <Container fluid className="h-100">
        <Row className="m-0 align-items-center justify-content-center h-100">
          <Col lg={3} md={4} sm={8} xs={12}>
            <div className={cardStyles.card}>
              <div
                className={`d-flex flex-wrap align-items-center position-relative ${cardStyles.cardHeader} ${cardStyles.cardHeaderPrimary}`}
              >
                <div className="w-100">
                  <h4 className={`text-white ${cardStyles.cardTitle}`}>
                    Login
                  </h4>
                  <p className={`mb-0 ${cardStyles.cardCategory}`}>
                    Enter Credentials To Continue
                  </p>
                </div>
              </div>
              <div className={`pt-0 ${cardStyles.cardBody}`}>
                <LoginForm />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Login;
