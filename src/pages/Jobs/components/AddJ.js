import { useEffect, useState } from "react";

import { useMutation } from "@apollo/client";
import { CREATE_JOB_MUTATION } from "../../../graphql/Mutations";

import { Form, Col, Button, Container, Row } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";
import { useDataContex } from "../../../context/DataContext";
import { checkFields } from "../../../utils/HelperFunction";

export default function AddJ() {
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [desp, setDesp] = useState("");
  const [applyUrl, setapplyUrl] = useState("");
  const [jobLocation, setJobLocation] = useState("");
  const [isError, setIsError] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  const [getResponseFromServer, setGetResponseFromServer] = useState(false);

  const { dispatch } = useDataContex();
  const navigate = useNavigate();
  const [addTodo, { data, loading, error }] = useMutation(CREATE_JOB_MUTATION, {
    variables: {
      input: {
        title: jobTitle,
        commitmentId: "cjtu8esth000z0824x00wtp1i",
        companyName: "TrimuLabs",
        locationNames: jobLocation,
        userEmail: email,
        description: desp,
        applyUrl: applyUrl,
      },
    },
  });

  useEffect(() => {
    if (error) {
      return;
    }
    if (data) {
      const localdata = data.postJob;
      if (!isUpdated) {
        dispatch({
          type: "ADD_NEW_JOB",
          payload: localdata,
        });
        navigate("/");
        setIsUpdated(true);
      }
      return;
    }
  }, [loading]);

  return (
    <>
      {isError ? (
        <div style={{ color: "red" }}>Please Enter required field</div>
      ) : (
        <div style={{ color: "red" }}></div>
      )}
      <Container>
        <Row>
          <Col>
            <Form>
              <Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Job Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </Form.Group>
              </Row>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Apply Url </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter url to apply"
                  value={applyUrl}
                  onChange={(e) => setapplyUrl(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Job Location </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Job location"
                  value={jobLocation}
                  onChange={(e) => setJobLocation(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formGridPassword">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={desp}
                  onChange={(e) => setDesp(e.target.value)}
                />
              </Form.Group>

              {getResponseFromServer ? (
                <Button className="btn btn-primary" disabled>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="sr-only">Loading...</span>
                </Button>
              ) : (
                <Button
                  variant="primary"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    let checkfields = checkFields(
                      jobTitle,
                      email,
                      desp,
                      jobLocation,
                      applyUrl
                    );
                    if (checkfields) return addTodo();
                    setIsError(true);
                  }}
                >
                  Register Your Job
                </Button>
              )}
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
