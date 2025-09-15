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
            burn_after: burnAfter,
            is_private: isPrivate,
            password: password || null,
        };
        if (onSubmit) onSubmit(paste);
    };

    return (
        <div className="paste-panel border-0 m-2">
            <Form onSubmit={handleSubmit}>
                <Row className="g-3">
                    <Col xs={12} lg={8}>
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
                                rows={20}
                                placeholder="Pega tu código aquí..."
                                className="big-textarea"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                required
                            />
                        </FloatingLabel>
                    </Col>

                    <Col xs={12} lg={4}>
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
                                className="d-flex gap-2 align-items-center"
                            />

                            <Form.Check
                                type="switch"
                                id="isPrivate"
                                label="privado"
                                checked={isPrivate}
                                onChange={(e) => setIsPrivate(e.target.checked)}
                                className="d-flex gap-2 align-items-center"
                            />

                            {isPrivate && (
                                <PasswordInput onChange={(e) => setPassword(e.target.value)} />
                            )}

                            <div className="d-flex justify-content-end">
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
