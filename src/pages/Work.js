import periodicTables from "../images/periodicTables.png";
import flashcardOMatic from "../images/flashcardOMatic.png";
import weLoveMovies from "../images/weLoveMovies.png";
import pomodoroTimer from "../images/pomodoroTimer.png";

function Work() {
    return (
        <div className="container-fluid col-md-8" style={{ marginTop: "56px" }}>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100">
                        <div>
                            <img
                                src={periodicTables}
                                className="card-img-top"
                                alt="Periodic Tables"
                            />
                        </div>
                        <div className="card-body d-grid gap-2">
                            <h5 className="card-title text-dark">
                                Periodic Tables
                            </h5>
                            <p className="card-text text-dark">
                                A web app for managing restaurant table
                                reservations
                            </p>
                            <a
                                href="https://github.com/djdenney/Periodic_Tables"
                                className="btn btn-dark"
                                style={{ height: "38px" }}
                            >
                                <i className="bi bi-github" />
                                <>/Periodic_Tables</>
                            </a>
                            <a
                                href="https://periodic-tables-frontend-eosin.vercel.app"
                                className="btn btn-primary"
                                style={{ height: "38px" }}
                            >
                                Deployment
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <div className="h-100">
                            <img
                                src={flashcardOMatic}
                                className="card-img-top"
                                alt="Flashcard-O-Matic"
                            />
                        </div>
                        <div className="card-body d-grid gap-2">
                            <h5 className="card-title text-dark">
                                Flashcard-O-Matic
                            </h5>
                            <p className="card-text text-dark">
                                A web app for creating and reviewing study
                                materials
                            </p>
                            <a
                                href="https://github.com/djdenney/Flashcard-O-Matic"
                                className="btn btn-dark"
                                style={{ height: "38px" }}
                            >
                                <i className="bi bi-github" />
                                <>/Flashcard-O-Matic</>
                            </a>
                            <a
                                href="https://flashcard-o-matic-gamma.vercel.app"
                                className="btn btn-primary"
                                style={{ height: "38px" }}
                            >
                                Deployment
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img
                            src={weLoveMovies}
                            className="card-img-top"
                            alt="WeLoveMovies"
                        />
                        <div className="card-body d-grid gap-2">
                            <h5 className="card-title text-dark">
                                WeLoveMovies
                            </h5>
                            <p className="card-text text-dark">
                                A cors-enabled backend routing and postgreSQL
                                project
                            </p>
                            <a
                                href="https://github.com/djdenney/WeLoveMovies"
                                className="btn btn-dark"
                                style={{ height: "38px" }}
                            >
                                <i className="bi bi-github" />
                                <>/WeLoveMovies</>
                            </a>
                            <a
                                href="https://backend-we-love-movies-a7joxuhag-djdenney.vercel.app/movies"
                                className="btn btn-primary"
                                style={{ height: "38px" }}
                            >
                                Deployment
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img
                            src={pomodoroTimer}
                            className="card-img-top"
                            alt="Pomodoro_Timer"
                        />
                        <div className="card-body d-grid gap-2">
                            <h5 className="card-title text-dark">
                                Pomodoro Timer
                            </h5>
                            <p className="card-text text-dark">
                                A single-page front-end web app for shiftwork
                                timekeeping
                            </p>
                            <a
                                href="https://github.com/djdenney/Pomodoro_Timer"
                                className="btn btn-dark"
                                style={{ height: "38px" }}
                            >
                                <i className="bi bi-github" />
                                <>/Pomodoro_Timer</>
                            </a>
                            <a
                                href="https://periodic-tables-frontend-eosin.vercel.app"
                                className="btn btn-primary"
                                style={{ height: "38px" }}
                            >
                                Deployment
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;
