import { useState } from "react";
import { Card, Form, Button, Row, Col, FloatingLabel } from "react-bootstrap";
import '@/css/PastePanel.css';
import PasswordInput from "@/components/Auth/PasswordInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft, faCode, faHeader } from "@fortawesome/free-solid-svg-icons";

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
            expires_at: expiresAt || null,
            burn_after: burnAfter,
            is_private: isPrivate,
            password: password || null,
        };
        if (onSubmit) onSubmit(paste);
    };

    return (
        <Card className="paste-panel shadow-sm border-0 rounded-3">
            <Card.Body>
                <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                    <FloatingLabel
                        controlId="contentInput"
                        label={
                            <>
                                <FontAwesomeIcon icon={faAlignLeft} className="me-2" />
                                Contenido
                            </>
                        }
                    >
                        <Form.Control
                            as="textarea"
                            rows={12}
                            placeholder="Pega tu código aquí..."
                            className="themed-input"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            required
                        />
                    </FloatingLabel>

                    <Row className="g-3">
                        <Col xs={12} md={6}>
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
                        </Col>
                        <Col xs={12} md={6}>
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
                        </Col>
                    </Row>

                    <Row className="g-3 d-flex align-items-center">
                        <Col xs={12} md={1}>
                            <Form.Check
                                type="switch"
                                id="burnAfter"
                                label="volátil"
                                checked={burnAfter}
                                onChange={(e) => setBurnAfter(e.target.checked)}
                                className="d-flex gap-2 align-items-center"
                            />
                        </Col>
                        <Col xs={12} md={1}>
                            <Form.Check
                                type="switch"
                                id="isPrivate"
                                label="privado"
                                checked={isPrivate}
                                onChange={(e) => setIsPrivate(e.target.checked)}
                                className="d-flex gap-2 align-items-center"
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            {isPrivate && (
                                <PasswordInput onChange={(e) => setPassword(e.target.value)} />
                            )}
                        </Col>
                        <Col xs={12} md={4}>
                            <div className="d-flex justify-content-end">
                                <Button variant="primary" type="submit">
                                    Crear paste
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Form>
            </Card.Body>
        </Card>
    );
};

export default PastePanel;
