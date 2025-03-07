/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      white: "hsl(0, 100%, 100%)",
      light: {
        black: "hsl(213, 14%, 12%)",
        gray: {
          0: "hsl(210, 25%, 98%)",
          1: "hsl(210, 24%, 93%)",
          2: "hsl(210, 16%, 85%)",
          3: "hsl(210, 13%, 75%)",
          4: "hsl(212, 10%, 62%)",
          5: "hsl(210, 8%, 48%)",
          6: "hsl(212, 10%, 38%)",
          7: "hsl(212, 11%, 29%)",
          8: "hsl(212, 12%, 22%)",
          9: "hsl(213, 13%, 16%)",
        },
        red: {
          0: "hsl(4, 100%, 97%)",
          1: "hsl(3, 100%, 91%)",
          2: "hsl(2, 100%, 85%)",
          3: "hsl(1, 100%, 76%)",
          4: "hsl(359, 95%, 65%)",
          5: "hsl(357, 67%, 50%)",
          6: "hsl(356, 71%, 38%)",
          7: "hsl(355, 71%, 30%)",
          8: "hsl(354, 74%, 24%)",
          9: "hsl(352, 91%, 17%)",
        },
        coral: {
          0: "hsl(15, 100%, 96%)",
          1: "hsl(12, 100%, 90%)",
          2: "hsl(12, 100%, 82%)",
          3: "hsl(11, 97%, 72%)",
          4: "hsl(11, 81%, 60%)",
          5: "hsl(9, 64%, 47%)",
          6: "hsl(9, 70%, 36%)",
          7: "hsl(8, 79%, 28%)",
          8: "hsl(7, 91%, 22%)",
          9: "hsl(6, 98%, 16%)",
        },
        orange: {
          0: "hsl(28, 100%, 95%)",
          1: "hsl(28, 100%, 85%)",
          2: "hsl(27, 100%, 74%)",
          3: "hsl(25, 96%, 63%)",
          4: "hsl(24, 76%, 51%)",
          5: "hsl(24, 100%, 37%)",
          6: "hsl(23, 100%, 29%)",
          7: "hsl(22, 100%, 23%)",
          8: "hsl(22, 100%, 18%)",
          9: "hsl(19, 100%, 14%)",
        },
        yellow: {
          0: "hsl(50, 89%, 89%)",
          1: "hsl(48, 87%, 73%)",
          2: "hsl(46, 76%, 60%)",
          3: "hsl(44, 65%, 50%)",
          4: "hsl(42, 100%, 37%)",
          5: "hsl(40, 100%, 30%)",
          6: "hsl(37, 100%, 24%)",
          7: "hsl(36, 98%, 19%)",
          8: "hsl(35, 100%, 15%)",
          9: "hsl(34, 90%, 12%)",
        },
        lemon: {
          0: "hsl(54, 95%, 85%)",
          1: "hsl(52, 87%, 67%)",
          2: "hsl(51, 70%, 56%)",
          3: "hsl(50, 72%, 45%)",
          4: "hsl(50, 98%, 33%)",
          5: "hsl(49, 100%, 26%)",
          6: "hsl(48, 100%, 20%)",
          7: "hsl(47, 100%, 16%)",
          8: "hsl(46, 100%, 13%)",
          9: "hsl(43, 100%, 10%)",
        },
        lime: {
          0: "hsl(75, 86%, 85%)",
          1: "hsl(76, 75%, 70%)",
          2: "hsl(76, 59%, 58%)",
          3: "hsl(77, 51%, 48%)",
          4: "hsl(78, 57%, 38%)",
          5: "hsl(80, 64%, 29%)",
          6: "hsl(82, 66%, 22%)",
          7: "hsl(84, 85%, 16%)",
          8: "hsl(86, 90%, 12%)",
          9: "hsl(88, 96%, 9%)",
        },
        green: {
          0: "hsl(133, 80%, 92%)",
          1: "hsl(134, 66%, 80%)",
          2: "hsl(135, 62%, 65%)",
          3: "hsl(136, 50%, 53%)",
          4: "hsl(137, 57%, 41%)",
          5: "hsl(137, 66%, 30%)",
          6: "hsl(138, 71%, 23%)",
          7: "hsl(141, 90%, 16%)",
          8: "hsl(142, 100%, 12%)",
          9: "hsl(143, 100%, 9%)",
        },
        teal: {
          0: "hsl(172, 72%, 92%)",
          1: "hsl(173, 58%, 80%)",
          2: "hsl(177, 57%, 63%)",
          3: "hsl(177, 46%, 51%)",
          4: "hsl(179, 51%, 41%)",
          5: "hsl(180, 66%, 29%)",
          6: "hsl(181, 67%, 23%)",
          7: "hsl(182, 95%, 15%)",
          8: "hsl(182, 82%, 13%)",
          9: "hsl(182, 80%, 10%)",
        },
        blue: {
          0: "hsl(200, 100%, 95%)",
          1: "hsl(203, 100%, 87%)",
          2: "hsl(205, 100%, 77%)",
          3: "hsl(208, 100%, 67%)",
          4: "hsl(211, 100%, 58%)",
          5: "hsl(212, 92%, 45%)",
          6: "hsl(213, 95%, 36%)",
          7: "hsl(214, 96%, 29%)",
          8: "hsl(216, 82%, 24%)",
          9: "hsl(217, 89%, 18%)",
        },
        indigo: {
          0: "hsl(229, 100%, 97%)",
          1: "hsl(231, 100%, 92%)",
          2: "hsl(232, 100%, 86%)",
          3: "hsl(234, 100%, 80%)",
          4: "hsl(234, 100%, 73%)",
          5: "hsl(237, 84%, 64%)",
          6: "hsl(238, 61%, 53%)",
          7: "hsl(237, 58%, 41%)",
          8: "hsl(235, 58%, 32%)",
          9: "hsl(235, 57%, 23%)",
        },
        purple: {
          0: "hsl(285, 100%, 97%)",
          1: "hsl(271, 100%, 92%)",
          2: "hsl(267, 100%, 86%)",
          3: "hsl(265, 100%, 80%)",
          4: "hsl(261, 92%, 72%)",
          5: "hsl(261, 69%, 59%)",
          6: "hsl(261, 53%, 48%)",
          7: "hsl(261, 56%, 38%)",
          8: "hsl(261, 59%, 30%)",
          9: "hsl(260, 66%, 23%)",
        },
        pink: {
          0: "hsl(330, 100%, 97%)",
          1: "hsl(327, 100%, 91%)",
          2: "hsl(327, 100%, 84%)",
          3: "hsl(326, 100%, 75%)",
          4: "hsl(325, 76%, 63%)",
          5: "hsl(324, 54%, 49%)",
          6: "hsl(323, 59%, 38%)",
          7: "hsl(322, 58%, 30%)",
          8: "hsl(320, 67%, 23%)",
          9: "hsl(319, 93%, 16%)",
        },
      },
      dark: {
        black: "hsl(218, 80%, 2%)",
        gray: {
          0: "hsl(210, 67%, 96%)",
          1: "hsl(210, 17%, 82%)",
          2: "hsl(212, 14%, 73%)",
          3: "hsl(212, 9%, 58%)",
          4: "hsl(215, 8%, 47%)",
          5: "hsl(214, 10%, 31%)",
          6: "hsl(212, 12%, 21%)",
          7: "hsl(215, 15%, 15%)",
          8: "hsl(215, 21%, 11%)",
          9: "hsl(216, 28%, 7%)",
        },
        red: {
          0: "hsl(8, 100%, 92%)",
          1: "hsl(6, 100%, 86%)",
          2: "hsl(5, 100%, 80%)",
          3: "hsl(4, 100%, 72%)",
          4: "hsl(3, 93%, 63%)",
          5: "hsl(1, 69%, 53%)",
          6: "hsl(360, 68%, 43%)",
          7: "hsl(358, 74%, 32%)",
          8: "hsl(356, 89%, 21%)",
          9: "hsl(0, 95%, 15%)",
        },
        coral: {
          0: "hsl(15, 100%, 91%)",
          1: "hsl(12, 100%, 85%)",
          2: "hsl(12, 100%, 77%)",
          3: "hsl(11, 90%, 68%)",
          4: "hsl(10, 80%, 59%)",
          5: "hsl(9, 64%, 49%)",
          6: "hsl(8, 69%, 40%)",
          7: "hsl(7, 76%, 30%)",
          8: "hsl(6, 92%, 20%)",
          9: "hsl(5, 97%, 14%)",
        },
        orange: {
          0: "hsl(34, 100%, 86%)",
          1: "hsl(33, 100%, 75%)",
          2: "hsl(28, 100%, 67%)",
          3: "hsl(25, 86%, 59%)",
          4: "hsl(23, 71%, 51%)",
          5: "hsl(21, 73%, 43%)",
          6: "hsl(20, 76%, 35%)",
          7: "hsl(19, 84%, 25%)",
          8: "hsl(19, 96%, 18%)",
          9: "hsl(19, 100%, 12%)",
        },
        yellow: {
          0: "hsl(46, 86%, 80%)",
          1: "hsl(44, 85%, 66%)",
          2: "hsl(42, 74%, 57%)",
          3: "hsl(41, 72%, 48%)",
          4: "hsl(40, 91%, 38%)",
          5: "hsl(40, 96%, 32%)",
          6: "hsl(37, 91%, 27%)",
          7: "hsl(35, 100%, 21%)",
          8: "hsl(33, 100%, 15%)",
          9: "hsl(30, 100%, 10%)",
        },
        lemon: {
          0: "hsl(54, 100%, 83%)",
          1: "hsl(53, 94%, 67%)",
          2: "hsl(52, 73%, 57%)",
          3: "hsl(52, 82%, 42%)",
          4: "hsl(52, 100%, 33%)",
          5: "hsl(51, 100%, 27%)",
          6: "hsl(50, 100%, 22%)",
          7: "hsl(48, 100%, 17%)",
          8: "hsl(46, 100%, 12%)",
          9: "hsl(43, 100%, 8%)",
        },
        lime: {
          0: "hsl(75, 74%, 76%)",
          1: "hsl(76, 62%, 64%)",
          2: "hsl(77, 54%, 53%)",
          3: "hsl(78, 54%, 45%)",
          4: "hsl(79, 60%, 37%)",
          5: "hsl(81, 69%, 30%)",
          6: "hsl(83, 75%, 23%)",
          7: "hsl(85, 84%, 17%)",
          8: "hsl(89, 90%, 11%)",
          9: "hsl(94, 95%, 7%)",
        },
        green: {
          0: "hsl(124, 78%, 82%)",
          1: "hsl(125, 69%, 70%)",
          2: "hsl(127, 59%, 58%)",
          3: "hsl(128, 49%, 49%)",
          4: "hsl(131, 55%, 40%)",
          5: "hsl(132, 59%, 33%)",
          6: "hsl(135, 62%, 26%)",
          7: "hsl(138, 69%, 19%)",
          8: "hsl(141, 90%, 12%)",
          9: "hsl(139, 81%, 8%)",
        },
        teal: {
          0: "hsl(173, 59%, 84%)",
          1: "hsl(174, 57%, 71%)",
          2: "hsl(176, 53%, 57%)",
          3: "hsl(178, 56%, 45%)",
          4: "hsl(178, 58%, 39%)",
          5: "hsl(179, 64%, 31%)",
          6: "hsl(181, 68%, 25%)",
          7: "hsl(181, 76%, 18%)",
          8: "hsl(181, 84%, 12%)",
          9: "hsl(182, 90%, 8%)",
        },
        blue: {
          0: "hsl(206, 100%, 90%)",
          1: "hsl(207, 100%, 82%)",
          2: "hsl(208, 100%, 74%)",
          3: "hsl(212, 100%, 67%)",
          4: "hsl(215, 98%, 61%)",
          5: "hsl(216, 84%, 52%)",
          6: "hsl(217, 84%, 42%)",
          7: "hsl(218, 85%, 33%)",
          8: "hsl(219, 80%, 23%)",
          9: "hsl(220, 88%, 16%)",
        },
        indigo: {
          0: "hsl(227, 100%, 93%)",
          1: "hsl(230, 100%, 89%)",
          2: "hsl(234, 100%, 84%)",
          3: "hsl(236, 100%, 79%)",
          4: "hsl(238, 91%, 73%)",
          5: "hsl(238, 83%, 65%)",
          6: "hsl(237, 60%, 55%)",
          7: "hsl(237, 54%, 43%)",
          8: "hsl(235, 61%, 30%)",
          9: "hsl(237, 65%, 21%)",
        },
        purple: {
          0: "hsl(267, 100%, 94%)",
          1: "hsl(270, 100%, 89%)",
          2: "hsl(269, 100%, 83%)",
          3: "hsl(265, 100%, 77%)",
          4: "hsl(262, 89%, 71%)",
          5: "hsl(261, 73%, 62%)",
          6: "hsl(260, 56%, 52%)",
          7: "hsl(261, 52%, 39%)",
          8: "hsl(262, 58%, 28%)",
          9: "hsl(261, 67%, 19%)",
        },
        pink: {
          0: "hsl(331, 100%, 93%)",
          1: "hsl(331, 100%, 87%)",
          2: "hsl(329, 100%, 80%)",
          3: "hsl(329, 89%, 72%)",
          4: "hsl(328, 63%, 62%)",
          5: "hsl(327, 48%, 52%)",
          6: "hsl(327, 49%, 42%)",
          7: "hsl(326, 55%, 32%)",
          8: "hsl(325, 71%, 22%)",
          9: "hsl(324, 83%, 14%)",
        },
      },
    },
    extend: {
      gridTemplateRows: {
        layout: "max-content 1fr",
      },
    },
  },
  plugins: [],
};
