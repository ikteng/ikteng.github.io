<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Ik Teng - Portfolio</title>
</head>
<body>

  <!-- Navigation Tabs -->
  <div class="tabs">
      <button onclick="openTab('homepage')">Home</button>
      <button onclick="openTab('projects')">Projects</button>
      <button onclick="openTab('contact')">Contact</button>
  </div>

    <!-- Homepage Section -->
    <section id="homepage" class="section active">
        <div class="container">
            <!-- Content for the homepage -->
            <h1>Welcome to My Portfolio</h1>
            <p>Hi, I'm Ik Teng, a passionate computer science student.</p>
            <img src="your-professional-photo.jpg" alt="Your Professional Photo">
            
            <p>Language: English, Chinese</p>

            <hr>

            <h2>Key Skills:</h2>
            <ul>
              <li>Documentations Application:
                <ul>
                  <li>Microsoft Office</li>
                  <li>Microsoft Word</li>
                  <li>Microsoft PowerPoint</li>
                </ul>
              </li>
              <p></p>
              <li>Programming Languages:
                <ul>
                  <li>Python</li>
                  <li>Java</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
            </ul>
            
            <hr>

            <h2>Education</h2>

            <h3>University of Wisconsin – Madison (USA)</h3>
            <p>Bachelor of Computer Science</p>
            <p>Cumulative GPA: 3.65/4.00</p>
            <p>Sep 2023 – May 2025 (expected)</p>

            <h3>Sunway University (Malaysia)</h3>
            <p>American Degree Transfer Program</p>
            <p>Cumulative GPA: 3.48/4.00</p>
            <p>Jan 2022 - Aug 2023</p>

            <h3>Sri Emas International School (Malaysia)</h3>
            <p>Cambridge IGCSE: 6A*, 3A, 1B</p>
            <p>Jan 2020 - Dec 2021</p>

            <h2>Relevant Coursework</h2>
            <ul>
              <li>Computer Science:</li>
              <ul>
                <li>Programming I-III</li>
                <li>Introduction to AI</li>
                <li>Introduction to Computer Engineering</li>
              </ul>

              <li>Mathematics:</li>
              <ul>
                <li>Introduction to Discrete Mathematics</li>
                <li>Calculus & Analytic Geometry I & II</li>
                <li>Calculus-Functions of Variables</li>
                <li>Introduction to Probability & Mathematical Statistics I</li>
              </ul>

              <li>Business:</li>
              <ul>
                <li>Principles-Microeconomics</li>
                <li>Principles-Macroeconomics</li>
              </ul>
            </ul>

            <hr>

            <h2>Leadership Experience and Campus Involvement</h2>
            <p>Member, Rotaract Club of Sunway University</p>
            <p>Sep 2022-Aug 2023</p>
            <ul>
              <li>participated in monthly general meetings which discuss about the upcoming events</li>
              <li>assisted in fund raising for charity through bake sale</li>
              <li>promoted EDURACT project which offered free tutoring to children at Trinity Community Children Home</li>
              <li>assisted in organizing the Sunway MS Charity Walk</li>
            </ul>

            <p>Class Executive Leader, CHIJ St. Theresa’s Convent</p>
            <p>Jan 2019-Dec 2019</p>
            <ul>
              <li>helped to train Radin Mas Primary School’s student leaders</li>
              <li>helped in hosting the Teacher’s Day celebration</li>
            </ul>

            <p>Soprano 2 Leader, Choir Club, CHIJ St. Theresa’s Convent</p>
            <p>Jan 2019-Dec 2019</p>
            <ul>
              <li>led warm ups and practices of the choir</li>
              <li>performed in Singapore Youth Festival 2019</li>
            </ul>

            <hr>

            <h2>Resume</h2>
            <button class="resume-button" onclick="downloadResume()">Download Resume</button>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="section">
      <div class="container">
        <h1>Programming Projects</h1>
        <hr>
        <div class="project">
            <h2>Movie Reviews Classification</h2>
            <p>Language and Tools Utilized: Python, pandas, Sklearn, TensorFlow & Keras</p>
            <p>Project file:<a href="https://github.com/ikteng/Movie_Reviews" target="_blank"></a></p>
            <img src="project1-screenshot.jpg" alt="Project 1 Screenshot">
        </div>

        <hr>

        <div class="project">
            <h2>Tic Tac Toe Game</h2>
            <p>Language Utilized: Python</p>
            <p>Project file:<a href="https://github.com/ikteng/Tic-Tac-Toe" target="_blank"></a></p>
            <p>This Tic Tac Toe Player uses minimax algorithm with alpha-beta pruning. 'X' and 'O' is randomly assigned to the player and the AI. 'X' will go first.</p>
            <p>The board is a 3x3 grid where the player need to input which position of the grid they want to place their piece.</p>
            <h3>Example</h3>
            <img src="C:\html_projects\portfolio_website\media\tic-tac-toe_img1.png" alt="initial stage">
            <p>If I want to place my X in the middle, I will input 2,2. The AI will then followup with its own action.</p>
            <img src="C:\html_projects\portfolio_website\media\tic-tac-toe_img2.png" alt="example">
            <p>To win the game, either the player or the AI have to get their pieces to line up. Else, it is a draw.</p>
        </div>

        <hr>

        <div class="project">
            <h2>Ticketing System for Theme Park</h2>
            <p>Language and Tools Utilized: Python, Tkinter, Sqlite3</p>
            <p>Project file:<a href="https://github.com/ikteng/Theme-Park-Ticketing-System" target="_blank"></a></p>
            <img src="project2-screenshot.jpg" alt="Project 2 Screenshot">
        </div>

        <hr>

        <div class="project">
            <h2>Pomodoro</h2>
            <p>Language and Tools Utilized: Tkinter, pygame, sqlite3, time and PIL</p>
            <p>Project file:<a href="https://github.com/ikteng/Pomodoro" target="_blank"></a></p>
            <img src="project2-screenshot.jpg" alt="Project 2 Screenshot">
        </div>

        <hr>

        <div class="project">
            <h2>Language Predictor</h2>
            <p>Language and Tools Utilized: Tkinter, pygame, sqlite3, time and PIL</p>
            <p>Project file:<a href="https://github.com/ikteng/Pomodoro" target="_blank"></a></p>
            <img src="project2-screenshot.jpg" alt="Project 2 Screenshot">
        </div>

      </div>

    </section>

    <!-- Contact Information Section -->
    <section id="contact" class="section">
        <div class="container">
          <h1>Contact Me</h1>
          <hr>
          <p>Email: <a href="mailto:iktengliaw@gmail.com">iktengliaw@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/ikteng" target="_blank">github.com/ikteng</a></p>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
