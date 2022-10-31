import './index.scss'
import Moh from "../../../assets/images/moh.png"

const Photo = () => {

    return(
        <div className="photo-container" >
            <img className='mohphoto' src={Moh} alt="M"/>
            <svg className='mohsvg' version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="300.000000pt" height="400.000000pt" viewBox="0 0 300.000000 400.000000">
              <g className="svg-container" transform="translate(0.000000,400.000000) scale(0.100000,-0.100000)"
              fill="none" stroke="none">
              <path d="M1411 3608 c-41 -21 -89 -40 -108 -42 -19 -3 -41 -10 -49 -17 -19
                -15 -18 1 2 29 26 38 9 36 -24 -3 -35 -40 -46 -44 -37 -15 3 11 2 20 -3 20
                -15 0 -24 -33 -11 -40 6 -4 9 -26 8 -49 -2 -25 2 -46 10 -53 11 -11 13 -11 7
                0 -10 17 15 116 25 100 4 -7 3 -21 -3 -31 -8 -15 -6 -23 8 -36 17 -15 17 -15
                5 1 -14 18 0 58 21 58 6 0 5 -6 -3 -17 -12 -15 -12 -16 4 -10 10 4 20 7 23 7
                2 0 1 6 -2 14 -3 8 -1 17 5 21 6 3 11 1 11 -5 0 -6 4 -9 9 -5 5 3 12 -3 14
                -12 4 -16 5 -16 6 -1 1 19 66 62 80 54 5 -4 12 -2 16 4 3 5 15 10 26 10 10 0
                19 4 19 10 0 5 -8 7 -17 3 -10 -3 -15 -3 -11 1 9 11 59 15 52 5 -3 -5 0 -9 7
                -9 7 0 4 -7 -7 -16 -18 -15 -18 -15 3 -5 15 8 20 17 16 31 -3 12 0 20 6 20 7
                0 9 -4 6 -10 -3 -5 1 -10 9 -10 8 0 18 5 21 10 3 6 11 10 16 10 6 0 7 -5 3
                -11 -5 -9 1 -10 20 -5 16 4 26 2 26 -4 0 -6 5 -8 12 -4 7 4 8 3 4 -4 -4 -7 -2
                -12 3 -12 6 0 11 5 11 10 0 6 8 10 18 9 10 0 12 -3 5 -6 -7 -2 -13 -9 -13 -15
                0 -6 7 -7 16 -4 9 4 28 -1 41 -9 14 -10 36 -14 53 -11 27 4 29 2 19 -15 -6
                -11 -16 -18 -22 -15 -7 3 -20 9 -29 12 -10 4 -18 10 -18 14 0 8 -37 16 -127
                26 -43 5 -56 3 -79 -15 -31 -25 -26 -26 21 -7 27 12 34 12 38 1 3 -7 0 -19 -6
                -26 -10 -11 -9 -11 5 0 10 7 24 11 32 8 8 -3 22 0 32 7 22 16 60 7 103 -25 29
                -21 31 -21 56 -5 15 10 28 16 30 14 1 -2 7 -13 14 -25 13 -26 -3 -42 -17 -16
                -9 14 -13 15 -26 4 -9 -7 -25 -11 -36 -8 -13 3 -18 1 -13 -5 3 -7 1 -8 -5 -4
                -7 4 -20 2 -29 -3 -18 -11 -17 -11 75 -15 9 -1 16 4 15 11 -2 7 4 10 13 6 8
                -3 13 -12 10 -19 -7 -17 17 -14 24 3 3 9 10 9 20 2 13 -8 10 -13 -15 -34 -22
                -18 -41 -24 -71 -23 -22 0 -49 -4 -60 -11 -17 -10 -16 -11 11 -7 45 8 115 9
                161 1 26 -4 44 -2 49 4 3 6 2 11 -3 11 -5 0 -35 38 -67 84 -57 84 -76 98 -119
                90 -14 -2 -30 4 -41 16 -10 11 -24 20 -31 20 -7 0 -25 5 -41 11 -15 6 -57 12
                -93 14 -59 2 -73 -2 -139 -37z m218 -49 c-15 -9 -32 -2 -24 11 3 5 13 6 21 3
                12 -4 13 -8 3 -14z"/>
                <path d="M1301 3603 c-8 -13 -10 -14 -11 -4 0 8 -2 12 -5 9 -3 -3 -3 -12 1
                -21 5 -15 8 -15 30 1 13 9 24 20 24 25 0 14 -29 7 -39 -10z"/>
                <path d="M1104 3493 c4 -61 3 -66 -10 -49 -8 11 -14 28 -14 37 0 10 -5 21 -11
                25 -9 5 -10 -1 -5 -20 4 -16 2 -26 -4 -26 -6 0 -8 -5 -5 -10 4 -6 11 -8 16 -5
                5 4 9 2 9 -4 0 -5 -5 -13 -10 -16 -8 -5 -7 -11 0 -21 9 -10 9 -22 0 -49 -6
                -19 -15 -33 -20 -30 -4 2 -15 -15 -24 -38 -25 -65 -13 -234 30 -414 26 -114
                37 -138 62 -137 16 0 22 -5 22 -22 0 -13 11 -35 25 -49 30 -33 40 -88 39 -222
                -1 -114 -13 -143 -64 -143 -15 0 -35 -9 -46 -21 -28 -32 -136 -78 -243 -105
                -176 -45 -314 -148 -355 -265 -13 -35 -30 -84 -38 -109 -24 -69 -38 -145 -38
                -211 0 -45 -11 -88 -45 -182 -24 -68 -55 -147 -69 -177 -36 -76 -34 -102 9
                -138 35 -28 36 -30 26 -73 -5 -24 -12 -78 -15 -119 -15 -209 -17 -250 -20
                -309 -4 -73 17 -311 28 -330 15 -24 53 -30 119 -19 39 6 100 8 152 3 l87 -7
                -5 -91 c-3 -51 -9 -104 -13 -119 -5 -23 -3 -28 12 -28 11 0 27 13 36 29 13 24
                13 29 2 24 -8 -3 -14 -11 -14 -18 0 -8 -5 -17 -10 -20 -6 -4 -1 17 10 46 12
                29 19 58 16 66 -3 8 -1 11 4 8 5 -3 10 4 9 17 0 13 2 34 5 48 4 15 -2 8 -14
                -15 -20 -41 -27 -35 -10 9 8 21 5 30 -15 51 -20 23 -33 27 -92 29 -37 1 -105
                -2 -151 -6 -67 -7 -86 -6 -98 6 -16 17 -19 30 -4 21 6 -3 10 -2 10 4 0 5 -4
                12 -9 15 -5 3 -9 26 -9 51 -1 25 -4 50 -7 55 -4 6 0 10 7 10 9 0 9 3 2 8 -11
                7 -18 80 -17 167 1 111 6 175 13 175 3 0 5 25 3 55 -2 39 0 55 9 55 9 0 10 3
                2 8 -8 5 -8 30 -2 86 7 61 7 81 -3 87 -22 13 15 115 44 122 103 25 250 9 329
                -35 l41 -23 -6 -115 c-4 -69 -16 -152 -29 -207 -21 -80 -26 -90 -41 -82 -11 7
                -17 7 -17 0 0 -11 36 -22 145 -45 39 -8 84 -20 100 -27 17 -7 33 -12 38 -11 4
                1 6 -3 5 -10 -2 -6 11 -16 27 -22 17 -6 32 -14 35 -17 3 -4 32 -15 65 -24 33
                -10 65 -20 70 -23 6 -4 21 -8 35 -9 22 -2 23 -1 5 6 -11 5 -23 7 -27 4 -5 -2
                -8 0 -8 5 0 4 -16 15 -36 22 -35 14 -35 15 -13 22 13 3 0 5 -29 2 -33 -2 -51
                0 -47 6 5 9 -23 15 -47 11 -5 0 -8 6 -8 15 0 9 5 12 12 8 7 -4 8 -3 4 5 -4 6
                -11 9 -16 6 -4 -3 -13 2 -20 10 -7 8 -23 15 -36 15 -12 0 -26 5 -29 10 -3 6
                -18 7 -33 4 -23 -5 -20 1 28 46 59 55 51 57 -16 3 -39 -31 -104 -47 -104 -24
                0 5 -8 7 -18 4 -14 -3 -17 2 -15 29 1 18 6 48 11 67 7 31 12 36 57 46 28 7 81
                24 119 39 37 14 86 26 107 26 30 0 42 6 59 30 15 22 30 30 50 30 22 0 28 4 24
                14 -8 21 -53 3 -81 -32 l-23 -27 10 35 c14 49 13 83 -2 77 -7 -2 -24 0 -37 5
                -21 7 -22 7 -11 -7 7 -8 19 -15 27 -15 11 0 13 -8 8 -33 -9 -41 -9 -41 -75
                -60 -30 -8 -92 -29 -137 -46 -81 -30 -82 -30 -76 -8 2 12 7 70 10 128 l5 106
                -28 31 c-43 45 -119 61 -279 57 -72 -2 -140 -6 -153 -10 l-23 -8 22 37 c23 40
                34 47 26 17 -7 -28 15 -16 30 15 12 25 11 26 -15 19 -25 -6 -26 -6 -9 13 20
                22 22 36 5 27 -7 -4 -6 0 4 7 9 8 19 35 23 61 9 56 25 63 25 10 0 -20 3 -34 6
                -30 9 9 22 75 16 82 -11 10 -12 46 -2 40 5 -3 7 0 4 9 -3 8 -1 23 4 32 6 11 6
                30 0 52 -8 30 -7 38 9 50 16 13 16 14 0 9 -15 -6 -16 -4 -7 13 6 11 8 20 5 20
                -3 0 3 17 13 38 11 20 17 43 15 50 -3 6 0 12 5 12 5 0 8 12 5 28 -3 24 -2 25
                7 7 9 -17 10 -15 7 12 -4 33 8 38 43 19 8 -4 5 2 -8 13 -17 15 -22 26 -17 42
                l7 22 19 -24 c13 -18 21 -21 29 -12 9 8 7 13 -9 18 -12 3 -21 13 -21 22 0 9 6
                13 14 10 10 -4 13 -1 9 9 -7 19 12 18 31 -2 9 -8 16 -11 16 -5 0 5 -15 21 -33
                35 -23 18 -27 26 -15 26 10 0 33 -14 53 -31 44 -39 53 -34 20 11 -25 34 -32
                60 -16 60 5 0 12 -7 15 -16 5 -14 7 -14 22 0 21 21 46 7 81 -46 33 -48 43 -36
                13 15 -13 22 -37 43 -61 54 -21 9 -39 20 -39 25 0 13 48 9 54 -4 3 -7 3 -3 1
                9 -6 23 9 40 20 23 5 -8 11 -7 21 1 7 6 12 15 9 19 -7 12 96 3 109 -10 18 -18
                44 -11 82 22 33 30 35 33 18 45 -14 10 -14 13 -3 14 8 1 17 1 22 0 4 0 7 3 7
                8 0 6 9 8 20 6 11 -2 22 1 26 7 4 6 16 -2 30 -18 13 -16 23 -24 24 -18 0 6 -7
                17 -15 24 -20 17 -19 27 4 33 14 3 21 -2 25 -17 6 -24 83 -85 136 -109 84 -37
                163 -51 277 -48 96 2 121 6 165 27 68 32 91 46 101 62 4 6 17 12 27 12 11 0
                20 4 20 9 0 5 12 23 28 39 68 73 73 80 58 85 -9 4 -25 -10 -42 -35 -58 -83
                -189 -159 -307 -178 -114 -18 -228 -1 -322 47 -70 37 -96 58 -122 103 -23 38
                -23 39 -4 50 30 15 46 13 31 -5 -6 -8 -10 -20 -8 -27 3 -7 14 5 26 27 16 31
                21 35 22 19 0 -20 30 -44 30 -25 0 5 -5 11 -11 13 -9 3 -9 9 0 25 6 12 11 35
                11 51 0 16 3 32 7 35 11 12 10 61 -1 69 -7 5 -7 8 2 8 6 0 12 8 12 18 0 10 6
                24 13 31 10 10 9 11 -5 6 -9 -4 -19 -14 -21 -23 -3 -10 -5 -6 -6 10 0 14 -4
                35 -7 45 -3 11 1 8 11 -7 10 -15 14 -18 11 -7 -3 10 -6 25 -6 33 0 9 -4 13 -9
                10 -11 -7 -21 17 -21 49 0 14 -9 29 -19 35 -31 16 -38 61 -40 266 0 106 19
                185 55 225 9 10 14 24 11 31 -4 9 -6 9 -6 1 -1 -7 -12 -24 -26 -39 -14 -15
                -32 -52 -41 -83 -9 -31 -21 -66 -27 -79 -8 -17 -8 -28 0 -41 7 -10 9 -28 7
                -38 -3 -11 2 -37 10 -58 9 -20 16 -49 15 -64 l-1 -26 -8 29 c-5 15 -16 36 -25
                46 -10 11 -14 24 -9 31 4 8 3 10 -4 5 -24 -15 -41 37 -40 124 1 56 -2 85 -9
                85 -19 0 -26 14 -16 27 6 7 13 32 17 55 5 35 4 41 -9 37 -8 -4 -15 -1 -15 5 0
                7 7 14 15 17 8 4 12 10 9 15 -3 5 -9 7 -13 4 -5 -2 -6 8 -3 23 3 15 7 21 9 15
                3 -7 9 -13 14 -13 6 0 7 5 4 11 -4 5 2 18 13 27 11 9 30 25 41 34 12 10 20 26
                20 35 -1 17 -2 17 -6 0 -2 -9 -9 -14 -14 -11 -6 3 -17 -2 -24 -12 -13 -18 -14
                -18 -8 4 3 12 9 22 15 22 5 0 4 10 -3 22 -10 18 -9 20 5 15 9 -4 16 -2 16 4 0
                6 10 8 23 4 21 -6 21 -5 -2 8 -17 10 -20 16 -10 20 11 4 10 8 -5 19 -15 12
                -18 22 -13 46 4 17 2 34 -3 37 -6 4 -8 -20 -6 -62z m-1 -674 c-4 -15 -8 -17
                -14 -8 -8 14 -3 29 11 29 4 0 6 -9 3 -21z m27 -19 c0 -5 -5 -10 -11 -10 -5 0
                -7 5 -4 10 3 6 8 10 11 10 2 0 4 -4 4 -10z m-4 -47 c-10 -10 -19 5 -10 18 6
                11 8 11 12 0 2 -7 1 -15 -2 -18z m-161 -593 c3 -5 -1 -10 -9 -10 -8 0 -18 5
                -21 10 -3 6 1 10 9 10 8 0 18 -4 21 -10z m-48 -11 c15 -6 23 -13 17 -15 -6 -3
                -26 2 -45 10 -39 18 -14 22 28 5z m-562 -976 c-4 -10 -10 -26 -12 -36 -3 -10
                -11 -16 -17 -14 -19 6 -19 40 0 54 25 18 37 16 29 -4z"/>
                <path d="M1137 3546 c-6 -16 10 -86 23 -100 5 -5 6 1 3 14 -4 16 -3 21 5 16
                16 -9 15 -5 -4 32 -8 18 -13 36 -9 42 3 5 2 10 -3 10 -6 0 -12 -6 -15 -14z"/>
                <path d="M1070 3541 c0 -5 5 -13 10 -16 6 -3 10 -2 10 4 0 5 -4 13 -10 16 -5
                3 -10 2 -10 -4z"/>
                <path d="M1946 3378 c5 -8 2 -9 -9 -5 -9 3 -19 2 -22 -3 -4 -6 4 -10 17 -10
                37 0 52 -14 39 -36 -6 -11 -11 -13 -11 -6 0 6 -8 12 -17 12 -16 0 -16 2 -3 11
                11 8 1 9 -38 4 -36 -4 -52 -3 -47 5 4 6 -10 10 -39 10 -25 0 -46 -4 -46 -9 0
                -5 16 -8 35 -7 25 1 34 -2 31 -11 -3 -7 5 -18 17 -24 12 -7 25 -16 28 -22 4
                -5 9 -5 13 2 5 7 -5 17 -25 25 l-32 13 36 5 c26 3 37 0 37 -9 0 -7 10 -13 23
                -13 12 0 27 -4 33 -8 18 -11 10 -60 -11 -78 -20 -15 -20 -15 2 -11 16 3 20 1
                16 -9 -3 -8 -13 -12 -22 -10 -28 9 -43 -8 -20 -23 12 -7 18 -8 14 -2 -3 6 -1
                11 5 11 7 0 9 -7 6 -16 -3 -9 -6 -20 -6 -25 0 -6 -4 -7 -10 -4 -9 5 -15 -33
                -13 -82 1 -7 -3 -13 -8 -13 -5 0 -4 -11 1 -25 6 -15 6 -26 0 -30 -6 -4 -10
                -22 -10 -42 0 -50 -11 -35 -16 23 -4 43 -3 46 12 33 16 -13 16 -12 2 16 -9 17
                -14 40 -12 53 2 13 -9 49 -26 80 -16 31 -31 65 -34 74 -3 9 -14 22 -26 28 -20
                11 -20 8 6 -41 44 -88 55 -129 55 -219 1 -97 -33 -257 -60 -278 -9 -7 -15 -18
                -13 -23 1 -5 -2 -9 -7 -9 -8 0 -24 -32 -26 -52 0 -3 -4 -10 -9 -15 -5 -5 -6
                -2 -1 6 5 9 3 12 -6 9 -8 -3 -16 -13 -18 -24 -2 -10 -6 -21 -10 -24 -18 -13
                -50 -68 -43 -75 4 -5 -1 -5 -10 -2 -12 4 -15 2 -12 -7 3 -8 0 -17 -7 -22 -7
                -4 -14 -3 -16 3 -2 5 -20 -5 -39 -24 -20 -18 -39 -31 -44 -28 -5 3 -12 0 -16
                -6 -4 -7 -3 -9 4 -5 5 3 13 0 15 -6 4 -10 6 -10 6 0 1 7 6 10 11 7 6 -3 10 -1
                10 4 0 6 3 10 8 9 17 -3 60 23 97 61 44 46 59 52 46 19 -5 -13 -7 -45 -4 -72
                3 -40 11 -57 41 -88 20 -21 36 -43 35 -48 -2 -6 2 -10 8 -10 7 0 9 10 5 25 -6
                24 -5 25 21 19 16 -4 48 -16 72 -26 37 -16 41 -20 30 -34 -10 -12 -10 -17 0
                -23 9 -6 4 -16 -17 -39 -21 -22 -25 -32 -16 -36 8 -3 13 0 11 6 -1 5 6 12 16
                13 22 4 36 15 19 15 -9 0 -9 5 0 20 7 11 19 20 27 20 10 0 11 -3 2 -14 -10
                -12 -8 -17 11 -26 22 -11 22 -10 4 4 -11 9 -14 16 -8 16 16 0 15 27 0 33 -9 4
                -10 6 -1 6 6 1 18 -5 26 -13 8 -8 23 -13 34 -10 11 3 25 -1 31 -9 10 -12 8
                -16 -15 -20 -26 -5 -26 -4 -8 9 15 11 16 14 3 14 -8 0 -21 -6 -27 -14 -25 -30
                46 -42 134 -22 24 6 27 5 13 -4 -10 -6 -18 -17 -18 -24 0 -8 -9 -16 -21 -19
                -16 -4 -19 -10 -14 -29 10 -31 13 -34 28 -19 9 9 9 13 -1 20 -19 11 27 50 68
                56 l35 6 -28 -16 c-15 -9 -25 -20 -22 -25 4 -6 -2 -10 -11 -10 -14 0 -15 -3
                -6 -12 8 -8 18 -3 41 20 16 18 37 32 46 32 11 0 0 -16 -33 -48 -41 -40 -49
                -53 -50 -87 l-1 -40 21 42 c21 44 98 123 120 123 7 0 -7 -18 -31 -40 -24 -22
                -42 -42 -40 -44 12 -9 67 17 72 34 6 23 35 26 61 7 16 -12 16 -13 -3 -14 -25
                -2 -58 -26 -91 -67 l-25 -30 45 30 c70 46 97 57 117 49 15 -7 13 -9 -12 -15
                -40 -9 -75 -28 -75 -41 0 -6 6 -7 13 -4 6 4 -6 -10 -28 -29 -46 -41 -38 -48
                12 -10 47 36 102 57 131 49 13 -3 22 -9 18 -12 -3 -3 -2 -11 3 -17 5 -6 11
                -27 12 -46 3 -29 1 -34 -14 -32 -9 2 -17 -2 -17 -8 0 -6 -4 -8 -10 -5 -5 3
                -10 1 -10 -4 0 -6 -6 -11 -12 -11 -7 0 -33 -16 -57 -35 -44 -35 -43 -45 4 -23
                14 6 25 16 25 21 0 6 2 8 5 5 3 -3 19 6 35 20 16 14 39 27 51 29 19 3 20 1 8
                -14 -8 -9 -9 -14 -3 -10 7 4 14 0 18 -8 3 -8 0 -15 -6 -15 -7 0 -6 -5 2 -15 7
                -8 10 -22 6 -30 -3 -8 -2 -25 2 -38 11 -29 4 -59 -11 -50 -7 3 -4 -3 6 -14 9
                -11 14 -23 10 -27 -4 -4 1 -4 11 0 15 6 17 2 11 -32 -4 -27 -3 -35 3 -25 7 10
                12 -1 19 -40 5 -30 5 -55 1 -57 -11 -5 -10 -42 2 -42 5 0 6 7 3 17 -4 10 -2
                14 4 10 11 -7 24 -57 23 -94 0 -13 9 -46 20 -73 22 -56 25 -73 9 -50 -7 10 -9
                11 -7 2 2 -8 7 -12 12 -10 5 2 15 -15 23 -36 15 -46 11 -60 -6 -18 -12 29
                -128 112 -156 112 -9 0 -14 4 -11 8 3 5 -8 6 -25 4 -16 -2 -37 2 -46 9 -11 9
                -14 10 -9 2 5 -10 -3 -12 -34 -9 -22 2 -40 1 -40 -4 0 -4 -20 -13 -44 -20 -49
                -13 -116 -70 -116 -97 0 -12 6 -8 19 13 23 38 86 69 170 84 73 13 122 7 168
                -21 38 -23 52 -60 60 -156 5 -60 3 -74 -10 -78 -12 -5 -15 -23 -16 -76 0 -39
                -3 -74 -6 -80 -4 -5 -2 -9 3 -9 10 0 13 -28 5 -50 -3 -8 -7 -64 -8 -123 -2
                -89 -6 -111 -21 -129 -11 -12 -13 -18 -6 -14 15 9 17 -50 2 -59 -6 -4 -7 -11
                -4 -17 5 -8 1 -9 -10 -5 -14 5 -15 3 -6 -12 7 -14 6 -20 -6 -25 -8 -3 -12 -10
                -9 -16 3 -5 4 -10 0 -10 -3 0 -10 10 -15 23 -8 19 -9 18 -6 -10 4 -31 3 -32
                -27 -28 -118 18 -140 18 -156 -4 -13 -17 -31 -23 -86 -27 -53 -5 -81 -13 -114
                -35 -44 -28 -48 -29 -165 -27 -118 1 -124 0 -246 -41 -242 -81 -510 -118 -782
                -109 -163 6 -159 8 -155 -59 2 -30 16 -60 14 -31 0 7 1 29 1 48 l2 35 195 -3
                195 -3 1 -34 c2 -40 2 -41 17 -77 15 -37 46 -52 75 -37 29 16 46 39 46 64 0
                14 -4 11 -14 -12 -15 -36 -56 -53 -80 -33 -26 22 -50 151 -25 135 6 -3 10 -22
                10 -41 0 -22 5 -34 14 -34 22 0 33 23 25 50 l-7 25 -1 -27 c-1 -16 -6 -28 -12
                -28 -6 0 -9 12 -7 27 4 34 38 46 38 13 0 -12 5 -18 10 -15 5 3 10 15 10 26 0
                32 19 21 26 -16 3 -19 10 -38 15 -41 12 -7 11 23 -1 47 -13 22 -6 26 56 33 85
                9 173 28 266 57 54 16 99 29 100 28 2 -1 12 3 24 9 36 19 76 25 207 27 119 3
                130 5 161 28 24 19 50 27 104 33 l72 7 1 -29 c0 -16 3 -40 5 -54 5 -29 -16
                -111 -28 -104 -11 7 3 -60 14 -67 5 -3 5 -16 -1 -31 -6 -15 -6 -30 0 -39 5 -8
                9 -27 8 -44 -2 -47 0 -51 21 -52 15 -1 20 3 16 15 -24 81 -27 113 -17 164 13
                63 17 213 7 246 -7 20 -4 22 36 22 24 0 60 -5 82 -9 22 -6 48 -6 62 -1 24 9
                58 63 47 74 -4 3 0 6 7 6 7 0 11 3 7 6 -3 3 1 27 8 52 7 26 13 54 13 62 0 8 3
                33 6 55 3 22 9 122 13 222 l6 181 40 18 c21 10 46 28 54 41 14 20 13 30 -10
                105 -48 157 -110 427 -132 568 -25 163 -37 201 -81 246 -51 54 -122 104 -147
                104 -30 0 -379 119 -397 135 -9 8 -38 19 -65 25 -28 5 -60 12 -72 15 -44 10
                -53 31 -53 122 0 79 2 89 35 144 19 33 35 64 35 68 0 5 9 15 21 22 11 8 21 21
                23 29 4 29 47 148 66 186 11 21 20 58 20 84 0 25 11 79 25 121 32 100 33 222
                1 244 -25 18 -40 19 -30 3z m-79 -590 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3
                4 -12 1 -19z m596 -725 c-7 -2 -21 -2 -30 0 -10 3 -4 5 12 5 17 0 24 -2 18 -5z
                m202 -836 c20 -41 19 -64 -5 -77 -24 -13 -26 -9 -34 73 -4 50 -3 57 9 47 8 -7
                21 -26 30 -43z m-368 -1039 c-3 -8 -6 -5 -6 6 -1 11 2 17 5 13 3 -3 4 -12 1
                -19z"/>
                <path d="M2510 1631 c0 -5 -13 -14 -30 -21 -16 -7 -27 -16 -24 -21 3 -5 -1 -9
                -9 -9 -17 0 -75 -28 -82 -40 -3 -4 12 0 32 10 23 11 40 14 44 9 3 -6 11 -3 19
                6 7 8 17 15 23 15 11 0 47 39 47 52 0 4 -4 8 -10 8 -5 0 -10 -4 -10 -9z"/>
                <path d="M2521 1481 c-8 -5 -21 -7 -29 -3 -10 4 -13 1 -8 -7 5 -7 13 -10 20
                -8 6 2 20 -4 30 -14 23 -22 17 -24 -27 -6 -18 7 -63 13 -102 14 l-70 1 85 -12
                c47 -6 81 -14 75 -17 -5 -3 -4 -4 4 -2 18 5 94 -45 86 -56 -2 -5 2 -14 10 -21
                13 -11 13 -8 4 18 -6 17 -19 34 -30 37 -10 4 -19 10 -19 15 0 5 8 7 18 3 10
                -4 5 5 -12 21 -23 22 -26 30 -15 37 8 5 10 9 4 9 -5 0 -16 -4 -24 -9z"/>
                <path d="M2338 1473 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"/>
                <path d="M2589 1447 c6 -8 7 -18 3 -22 -4 -5 -2 -5 5 -1 14 8 6 36 -9 36 -7 0
                -6 -5 1 -13z"/>

                <path d="M2183 1143 c4 -54 9 -107 13 -119 4 -16 -1 -23 -23 -32 -56 -20 -334
                -59 -351 -48 -6 3 -12 2 -14 -4 -1 -5 -9 -6 -16 -1 -17 10 5 205 22 196 6 -3
                19 -8 29 -11 9 -4 17 -12 17 -20 0 -20 38 -40 105 -54 33 -7 70 -19 82 -27 29
                -19 48 -6 57 40 5 24 2 35 -11 44 -28 21 -37 15 -12 -8 16 -13 20 -22 12 -25
                -7 -3 -10 -11 -8 -17 3 -7 1 -19 -4 -27 -9 -12 -12 -12 -28 2 -10 9 -35 19
                -56 23 -20 4 -40 11 -43 16 -3 5 -18 9 -33 9 -32 0 -59 24 -41 35 7 4 -9 17
                -37 30 l-48 22 -6 -21 c-4 -12 -13 -68 -20 -126 -10 -80 -14 -98 -20 -75 l-7
                30 -1 -33 -1 -34 123 7 c67 4 149 13 182 21 33 7 92 18 130 24 80 12 127 28
                119 41 -3 5 -11 6 -17 2 -6 -4 -23 -7 -37 -7 -23 0 -26 5 -38 70 -7 38 -12 93
                -10 122 2 28 -1 52 -6 52 -5 0 -6 -42 -3 -97z m-206 -209 c-3 -3 -12 -4 -19
                -1 -8 3 -5 6 6 6 11 1 17 -2 13 -5z"/>
                <path d="M1195 995 c-13 -15 -24 -30 -23 -34 1 -3 -11 -28 -28 -54 -28 -46
                -58 -64 -95 -59 -13 2 -16 -8 -18 -50 -1 -28 1 -49 4 -46 4 3 7 20 7 37 1 26
                5 31 26 31 30 0 72 44 104 108 23 46 24 47 51 34 15 -7 27 -20 27 -28 0 -10
                13 -14 49 -14 26 0 69 -3 95 -6 34 -5 46 -3 46 6 0 7 -3 10 -7 7 -3 -4 -13 3
                -21 15 -15 21 -16 21 -23 2 -7 -17 -8 -16 -9 6 l-1 25 -13 -24 c-9 -16 -16
                -20 -20 -12 -5 8 -12 9 -20 2 -7 -6 -18 -6 -25 -1 -8 4 -20 6 -28 3 -7 -3 -13
                0 -13 6 0 6 -9 20 -20 31 -15 15 -16 20 -5 20 8 0 21 -12 30 -27 l15 -28 -6
                30 c-8 36 -4 31 -31 39 -17 6 -29 1 -48 -19z"/>
                <path d="M1202 932 c-25 -22 -84 -121 -80 -133 2 -6 20 20 41 56 21 36 48 70
                59 74 13 4 17 10 11 14 -6 4 -20 -1 -31 -11z"/>
                <path d="M1563 923 c-29 -10 -10 -23 34 -23 36 0 44 3 35 12 -12 12 -49 18
                -69 11z"/>
                <path d="M1042 895 c-12 -13 -17 -27 -13 -30 9 -5 46 43 39 51 -3 2 -14 -7
                -26 -21z"/>
                <path d="M953 853 c-18 -9 -33 -20 -33 -25 0 -12 3 -11 51 17 48 27 33 33 -18
                8z"/>
                <path d="M2242 855 c2 -14 11 -20 30 -21 15 -1 25 3 22 8 -3 5 -11 7 -17 5 -7
                -2 -18 3 -25 12 -11 14 -12 14 -10 -4z"/>
                <path d="M1116 742 c-9 -15 12 -83 31 -98 10 -7 35 -19 56 -25 20 -7 37 -15
                37 -19 0 -4 6 -7 13 -8 6 0 39 -11 72 -23 70 -25 270 -78 334 -89 23 -4 46
                -11 50 -16 6 -10 61 -13 61 -4 0 3 -66 22 -148 44 -171 45 -311 84 -332 93 -8
                3 -42 15 -75 27 -63 22 -83 45 -87 100 -3 28 -4 30 -12 18z"/>
                <path d="M1860 740 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0
                -10 -4 -10 -10z"/>
                <path d="M1180 730 c0 -12 8 -12 35 0 18 8 17 9 -7 9 -16 1 -28 -3 -28 -9z"/>
                <path d="M1295 730 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
                -8 -4 -11 -10z"/>
                <path d="M2388 723 c7 -3 16 -2 19 1 4 3 -2 6 -13 5 -11 0 -14 -3 -6 -6z"/>
                <path d="M1401 504 c0 -11 3 -14 6 -6 3 7 2 16 -1 19 -3 4 -6 -2 -5 -13z"/>
                <path d="M1442 500 c0 -14 2 -19 5 -12 2 6 2 18 0 25 -3 6 -5 1 -5 -13z"/>
                <path d="M1780 456 c0 -2 9 -6 20 -9 11 -3 18 -1 14 4 -5 9 -34 13 -34 5z"/>
                <path d="M1830 446 c0 -2 11 -6 25 -8 13 -3 22 -1 19 3 -5 9 -44 13 -44 5z"/>
                <path d="M1890 438 c0 -3 23 -8 50 -10 28 -1 50 0 50 4 0 3 -23 8 -50 10 -28
                1 -50 0 -50 -4z"/>
                <path d="M2012 428 c-9 -4 8 -7 38 -7 30 0 61 3 68 8 16 10 -80 9 -106 -1z"/>
                <path d="M2213 141 c0 -11 6 -19 12 -18 5 1 9 -3 8 -10 -2 -7 6 -17 17 -23 18
                -10 19 -9 9 17 -19 50 -49 72 -46 34z"/>
                <path d="M764 96 c-3 -8 -4 -25 -2 -38 3 -17 5 -13 9 15 5 38 2 47 -7 23z"/>
                <path d="M2210 80 c0 -5 5 -10 11 -10 5 0 7 5 4 10 -3 6 -8 10 -11 10 -2 0 -4
                -4 -4 -10z"/>
                <path d="M2187 41 c-4 -17 -3 -21 5 -13 5 5 8 16 6 23 -3 8 -7 3 -11 -10z"/>
                <path d="M2225 10 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0
                -8 -4 -11 -10z"/>
              </g>
              </svg>
        </div>
    )
};

export default Photo;