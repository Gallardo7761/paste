import { useState } from "react";
import { Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import '@/css/PastePanel.css';
import PasswordInput from "@/components/Auth/PasswordInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHeader } from "@fortawesome/free-solid-svg-icons";
import CodeEditor from "./CodeEditor";

const PastePanel = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [syntax, setSyntax] = useState("");
  const [burnAfter, setBurnAfter] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const paste = {
      title,
      content,
      syntax,
      burn_after: burnAfter,
      is_private: isPrivate,
      password: password || null,
    };
    if (onSubmit) onSubmit(paste);
  };

  return (
    <div className="paste-panel">
      <Form onSubmit={handleSubmit}>
        <Row className="g-3">
          <Col xs={12} lg={2} className="order-last order-lg-first">
            <div className="public-pastes">
							<h4>pastes públicas</h4>
              <hr />
              <div className="overflow-auto" style={{ maxHeight: '80vh', scrollbarWidth: 'none' }}>
                <div>
                  <h6>paste #1</h6>
                  <p>Un ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #2</h6>
                  <p>Otro ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #3</h6>
                  <p>Un tercer ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #1</h6>
                  <p>Un ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #2</h6>
                  <p>Otro ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #3</h6>
                  <p>Un tercer ejemplo de paste pública.</p>
                </div>
								<div>
                  <h6>paste #1</h6>
                  <p>Un ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #2</h6>
                  <p>Otro ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #3</h6>
                  <p>Un tercer ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #1</h6>
                  <p>Un ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #2</h6>
                  <p>Otro ejemplo de paste pública.</p>
                </div>
                <div>
                  <h6>paste #3</h6>
                  <p>Un tercer ejemplo de paste pública.</p>
                </div>
              </div>
            </div>
          </Col>

          <Col xs={12} lg={7}>
            <CodeEditor
              className="border rounded-4 pt-4 pe-4"
              syntax={syntax}
              readOnly={false}
              onChange={(value) => setContent(value)}
            />
          </Col>

          <Col xs={12} lg={3}>
            <div className="d-flex flex-column gap-3">
              <FloatingLabel
                controlId="titleInput"
                label={
                  <>
                    <FontAwesomeIcon icon={faHeader} className="me-2" />
                    Título
                  </>
                }
              >
                <Form.Control
                  type="text"
                  placeholder="Título de la paste"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="syntaxSelect"
                label={
                  <>
                    <FontAwesomeIcon icon={faCode} className="me-2" />
                    Sintaxis
                  </>
                }
              >
                <Form.Select
                  value={syntax}
                  onChange={(e) => setSyntax(e.target.value)}
                >
                  <option value="">Sin resaltado</option>
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                  <option value="c">C</option>
                  <option value="cpp">C++</option>
                  <option value="bash">Bash</option>
                  <option value="html">HTML</option>
                  <option value="css">CSS</option>
                  <option value="sql">SQL</option>
                  <option value="julia">Julia</option>
                  <option value="json">JSON</option>
                  <option value="xml">XML</option>
                  <option value="yaml">YAML</option>
                  <option value="php">PHP</option>
                  <option value="ruby">Ruby</option>
                  <option value="go">Go</option>
                  <option value="rust">Rust</option>
                  <option value="typescript">TypeScript</option>
                  <option value="kotlin">Kotlin</option>
                  <option value="swift">Swift</option>
                  <option value="csharp">C#</option>
                  <option value="perl">Perl</option>
                  <option value="r">R</option>
                  <option value="dart">Dart</option>
                  <option value="lua">Lua</option>
                  <option value="haskell">Haskell</option>
                  <option value="scala">Scala</option>
                  <option value="objectivec">Objective-C</option>
                </Form.Select>
              </FloatingLabel>

              <Form.Check
                type="switch"
                id="burnAfter"
                label="volátil"
                checked={burnAfter}
                onChange={(e) => setBurnAfter(e.target.checked)}
                className="ms-1 d-flex gap-2 align-items-center"
              />

              <Form.Check
                type="switch"
                id="isPrivate"
                label="privado"
                checked={isPrivate}
                onChange={(e) => setIsPrivate(e.target.checked)}
                className="ms-1 d-flex gap-2 align-items-center"
              />

              {isPrivate && (
                <PasswordInput onChange={(e) => setPassword(e.target.value)} />
              )}

              <div className="mt-auto">
                <Button variant="primary" type="submit">
                  Crear paste
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PastePanel;
