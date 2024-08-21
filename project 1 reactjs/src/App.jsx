import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {




  
      const batch = "SMIT-TTS-9-11-(HO)";
  const isLogin = false;
  const Cars = [
    { 
      id: 2, 
      name: "Mercedes", 
      model: "Benz E200", 
      LOGOimgUrl:"https://i.pinimg.com/originals/46/1b/c3/461bc3941474e17e43c4bc0c2e4c3af5.gif"
      
      ,


      imgUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFhUXFRYVFxUXGBgaFxYVFRUWGBUXFR0YHyggGholHRcVITEhJSkrLi4uFx8zODMsNygtLisBCgoKDg0OFxAQGi0dHR0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLS0tLS0tLS0rLS0tLf/AABEIALEBHQMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABPEAACAQIDBAYGBgYIBAMJAAABAgMAEQQSIQUxQVEGEyJhcZEHMkKBobEUI1LB0fBTYnKCktIVM0Njk7Lh8RaUwuKDtMMkJTRUc3SEoqT/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACQRAQEBAAEEAgAHAAAAAAAAAAABESECEjFBA1ETIlJhgeHw/9oADAMBAAIRAxEAPwDmc+BR/wD2nESCOI6JGtjIQFUhQOBysh5ai5W4NDb3R9I5RGhsxQuND1ZC5sw1JKEBCdSw19mthj/R3M0cakr2OF+ccScv7ofxCpeO6OMWzsRukI14SQhX+GU+dcrerdt+/wCm5I5MYZL5SpupIseFtCKP6O3K3vH410ifocblt99dCOOtMN0aQDtWHfr91eidFY7nP+qI3ng3+U0WGLA9kkH8761e1NkxIoAcXvxOpBsPxqjRo0YgkNa2q8rVO3DSgS3rDXmPvpL7McjMFupOW9x61r2147qdXHqdwp+faZUBFvkzBzoLk5FB1GoF76fE1eBUT4Rl3j4j7qj1azzmW+XLoLm7Kp47gxBb3XqA+HK2v48x8N9QMZaXFATT4kbUdkCxvZQPuvSo58ooFphKeXCimBi6P6WeRqiWuFWj6hahHFNypJxDU1E/qhR5VqtMzc6SZG5imqsmtSWYVW5z9qiJ/WqaJ7OKEUgFyGAYbu+978D+TVfbvNFbxoJ8u1Duy37OU3JNzr2tLa6/KokcWYb/AHtew8dKbI8aUtuVQNAfI/I0ginKIragQppzraQRRUE2OPNCzX9Vhb3jdUKr7ZMuFbDmFxOJzIGUr1fVEC2j37QO/d3VRyjtG3M/OgftR2pUq2YjvNEBTAVqGWlhKWIvzY0DWWjy1IXDHkadXAN9k1cHZ8d0mbNrioyuvqov3nfu3kbt/CqmXb0dhmxWp3gBdB3G/wCfdXJdq46J7CGJo13nPIZGJ8cq2FuFqg795pvI69idqYUi/wBKkJ8Vt4+rVM+0sPqXmZuQDAD4C9YKKOL2mPuFSoosPzkPurXdUxc7VGFftqzBgMoN8w7iQeI7jWdeMg2BDC+/d5g1ZLBh+Ech94/Go8sHaJWJcvAMwv8AOpVCWBhEJSigXaNXWw7a5GYMN3qv779xqucnjWm6LdKTgs4EEMgbUpMudMwDKGUcGAdhfiCfdWtiVb+ziHi2tZEKKVRuJ+NKkx199z3mpM0oylgE0st03gsCRe+8dk1Xph2O5W5bjVCmxV+FJ62j6kkE2uFtc8r6CmbVNU6JR30XXU1ajUa2pqFF786M3BI5fdTVHfhUDobvFKuOdNSvck86SrWoHyw50RfvHxpk0VA6X7/hRZ+/4Cm6FA8JBzPwoCUd9M0KB1pByPn/AKUYkAPtbiN4G8WPDvpmjtTF0s2O4W8T/pTxgULmzoT9i7Zvlb41GFORNa/ZvcW1G7vFAtXKMCLAjUEa0vaEQV7DeALn9Yi5t76aVze9r251IZiyPI+8kIPHeb/njVQFxDEAkA+zc3O4eNLWc8l8qKEoEyktmuSRbQEcR7h8aNQvfQOdc3MeQ/CkNK/2j7tPlSwFHsn+L/Sj65R/Zg+JP3VYGs7/AG2/iNJMV99SFxp4Rx+TfjTn9IScFQeCj76op3SxtSKUxohWaQVHeiq12xslIY8PIuJhm66POyRtd4W4pKOB1+B9+dXFXelKtJFG++qg1I00qbNEEANgQR31BDa3p6XEs2htV0WuwuksmEZnhVAzxtGcyhxlbjZgRfv7zwJqDs+XNIqySEKxyl2JsmbQOeNlNjpyqDanGXdw/IoLDGYEJPJFFKMQqXCvGGyve2qAi+hPvty1qvI0B/PiKmbHxkmHlWeGcRyLfK65rjMpU27PIke+lLMuVwxWQvrmYOWVibswuRcnvv4XsQ5FfalRrx4ffwp9QtmAPAaHTNru0Pv91JiFhfKL5h5WN9D7qYGBHShB305EhvuqQkd6uCKMP30Po/fU5FrWdHPRxj8dCMRAkYiYsFaR8ubKSrEAAm1wRrbcacDDdRRjDVoYujWIONGz8gGI6zqspIyg2zXLD2cvavy4X0rQ9J/RhjMDhnxUsmHZEKhxG7lhncID2kW/aZfOnA5/9HFKGGFaSPo052c+0usUIs4g6uxzEnL2r7rdrd3UXQ/YH07FJheuWHOGIdhfVRcKq5hmY8r8CeFBnhhhypX0cchXT9ueixYMPiZ49pRTthlLSxLGAVsLlWIlYo1gSARrb31U+j7ojBjkxUuIxDwR4ZY2LKF3MJCxbMDYAIPOmwYgQDkKV1IrTdN9m4HDmP6Di2xIKyGQtlshXLkAyqu+7337hW0xXoygTEbMQPM0WKEgmJZcyusBlQIQosDZt9/VpsHJOqoylWu3sIsWLxMKXyRYiaJb6nLHKyLc8TYCtv6POhMGP2djZGQnEo7pA+dwFYQo6Aqpyt2m4g76DlqrrVt0c2R9JmEGfKXvlGUt1jKL5ARqpIzWNrc9961fTbYOHg2ZsueKILLPEGle7EuTEjXNzYak7qwOIG6gdxkDCVs6FGDWZCLFbaFbHlu91Pn6ODvlPgFFQ4pWdlBN9LDnYXb7zTsmEtzBqiQJoPsSnxK/zUPpUA3Ydj4yW+V6qpY2XffxpJNBcjaMfDCp73J+6l/0qOGHhHjc1RUYJ5mmoZU/fSan43FNNlcxooSNY/q4wi2UWBfKO05vcsdTeoFYUKFCnkwrkXCMRvuFJFqBmhR0VAKFCrPYexJMSXyFFWNc8juwVUS4BY3379wuTwoI2CwbSNlRcx38AAOZJ0A3ampe0MIsYF3DMb2yG66b7kjXdu048qXjscqp1UNxHfRiLNKRvlf5Ku4a8bmiw+AklKogJywSTNu0RQ7sxvyW1W3IQWF2S0mV1jPVm3rOq5retlZlA39xt30s7Cl4dV/jRfHWhjsaymNVt2YIgLqresgc2zA21fhypI2/iBpnHgUT+WonJxdhy84v8aL+apEOw5twiDeEim/hYmon/EE/2l/w4j81pI21Je5y+Kqqn3FQCN3A1dXlFnjyswICkaZSGBB5G4FSIcQo3+d1/GunYfYmEkw0MuJ2jh2d4I2yv1IkXOgYRl83WHLqNTwNZXG9H8O0xXDMOBQiaJ0B94zC1r6k799NZnVFCJU529x+e6usbCcy4LY0OEkhkmixMk8kZmChcrSyhZSuYpe4Aup1I0rlOG2h1RdQHPaNykmXUaE2KkHyp87Whb11Ynm8cTnzGU1Lda5jfbCMj9KFMyqsv0iXOqEsgK4WTRWIBIsBrYVL2if/AHRtw/a2w4//AKcOa5/s3EhZUfCuUkGqvG0kTroQStyy2sSCORIrYT7Pxo2fPhkKTJiJxipL3EwlzRsxBBysD1Y0sN/uomwgi3Rf9rH/ACb/ALaqPRit9rYL/wCox8oZDWv6ObCGO2HHghiYoJY8Y8kiyesovLZWW4IJzKR4VQdCcGuF29BC0qMsUsqmUaISMNJqCTzNvEVftWp6y+G6TN/fyp/CGWoHoiwsUmA2qk0nVROkaPJp2FKSgtrpperrpLgYcFs/axOLikbGzvKiKRmBlkFksCSxAJJPIE1Qei6GGXZ+0cLLiYsOZyiBpGUWHV+sFZlzDfxqehiumez8NBKY8JiPpMXVBjL2fXJfMoyi2gC+denIMJHIuHBtngEcqjiC0UkQPvDSD3V5o6bbAjwbLFFjI8XmjZi0QACG9gpyu9ydTvFdjg6a4SPayj6VAYH2eitKJEMazRSyFFZr5QcrvoTfUc6tHF+lP/x+N/8AvMV/5iSutegjELHgcQzGwONVP3pEw6IPezAe+uQbdmD4vEupBVsTOysNQytM5Ug8QQQb1q+j+3I4dh42ISquJOLjlhjv22yNhGDKOIBRv4TVvgab0+4dY4sDGgsqmYKOQCxgAedcZxC6V0/0w9JsPjUwRgkDkLK0ii94y4hsrd+jD901zWUaGk8CPstgs0RO7rEB/ZLAN8Ca0218FbUbxofFSQfl8KyJNtRvGvlWtkxmfNfj2vPQ/EfGsXZ1SunTl6bFHLGNx3GqyRMrEfm1XWKjI0ItuIvxB1U+HfVbjhuPurp6c0a1FajFCgvIHy7MkXMvalBtYZtGTXnbSszTnWD7I+P40aFOKm3cfxrOmGq1MOIHU9mZUthwpXrLFn7ZNluOBUcd1MbM2DHiFPUOWkAv1ZIVrcTu8O7XeKj4dYcPIyYvCyNpoucoRyIIFiO+s92L2qYUVHQArSJ+D2W0iZleIHNazzRRkADfaRgTe/DkatdodFsXhoQWItKAzRRyKzBFN0aUIbWOjLv56aXh9HsLGwkeWURqijL9pnZgLKONgGJ8AONTtlRR4iVYnxJF79oRFwqqCdczKbWHCpbJNpJqihhzMik6FsneouL6cPW871brjG66Qo6oPo7QMxsFK9VlyXta5C277UkdVK6pGRfMcv1bKxFu92tqL6tp4VDKAjccxJIA7zu77XI/JpZsXw0WAjR9bajsn93sj4AVWdLcIqlCvEEGqqTS41VhpxG7hpSJhuuST43rE+PLrd69mEpGtrnNfuGlt3HvppktS1bx8zT5WPgxI+Pha1bxzRkjJ3eNSsLgSx1FhUhcbCFAGGFwLF+skBPeQGt5aUg4v7KMByzuRSy+iX7PtskcDVYoubNbjr4VLGNk/W8/9KjsR9k+f/bUkvtq36O4clG0JHEEGxsRYi49499bDor0zkwzBZLyw7re2nhf1h3HzrI4bFIpOeLOMpCguy5Sdzdm1/A6U8MdFp9VINNfrFIPuKaedac7HYto7Gwe1IhNE4D2sJFHaBt6sinf4EXrm219jS4aTqpVAPskeq/7P4fOxsxsrb0eHcSRPiEbj2UYEcmGZcwrbYrpfgcZh2WZlWQDsq6sGJ462KZTxBcHTmBU8E3wwQTlaiK05jdlKmIVYp0kL2sYnMmRnIuCVF3I10GpsL76ssXsXExgddAytbWynL3HQWF9NOflWpWsVFqOnitJKVpDdqFLy0VqBNqS40pyiNBVkVsOjk8ccMmIaJZHiVWAcnKM7wxgkDfYuzcD2RYjW+Sbeav+j2KREOeLrFbKrDu7e8cdbHxUVy+SbG+jy2fSApiMPhpWCBi8azAC3YljwwkmW2oKSv4HrNb2rn238H1bOl75SNTv1AOvnWmwe1cPkjWWKTLZ43s72yOZNFuxF9If8I8b1QbcbNqcxYxqWLADtgdq1gNLj5Vn4pZw114oFoUS0Yrs5l/0VN+japEXR7EvYLCx8vxrWYZy2jSHXiLA+4itt0bgQWHXEW7ox59nXxrE2tWRS+inoK6TjFYm0ZS4RMwv2lKkm3cSLV0vpF0VwWLjySBTvIIOqk7yvI6Dyq32RgFZbiQsO4xn5LVumCUcfPL+FaZeetp+h6RWPU4lWXgHUg27yN/lWfxfo7x0JzMoyi5MisoAABJtnK62B5V6O6V9H5cRGBh8Q0Di/qkqGva2YrqLW+JrjvS+PFYcNgZsQ7SygSZzIZBGi6AAm1mft94CjnXO9X5sz+Xpnw9H4N+Tvm/p9+f9XM5LBwXAtzZQLsFF7qvf531vqKWsUqx/So1KIJDF1qsQ2dkJyetfVb62t8qS2znU6FTbgbcP2tD4XqPPhmBNxa532AXXXQ7h4DSrw8/JuOYqQRzvVps2QOzZYUF0C6XCJYBbm9yb7zc66+FV6RhpCFF1ubC9rqN2ttNKehnKKyLc5j2vBQbeO9r8PjWkNtYAZr336AZcvC27frTLSE60ea+pJ1vra+ttN58NeHwqZg8Ipy5yUW1y9rgai17bhqBeqIDDXWha5rrHRf0eJPAXLSMjgKGgMLDQ3zMHNt5I89ag9KfRdNhQrdbh2VzlTPJ1EhY6hR1jGLNv0za0w1zUMRup1W4sW9zAfOrLa+wJoDaWKSI7hnHZY/qP6rDwJqskw7KbEW8RagdQodFRyf2rn4ChLIBoUZSO+2nfpv76jpGSQALkkAAbyTuFJIqYullx+t/F/pSS/efOkUKIVno81ItQoHYkLEKLXO65A+Jp/FxSQnq2JHErcgX7wePuqKDoRbfxtqPCioLjAdJsREnVqYzHe5R4YXDftZlufOjxnSBpGzGKKPS1oowi+WutUt6F6DW7JxWCYHr5542t7OHVkVuGZhLmI8EFRRPGxsj35aEX86zt6O4q6NGVpJqpgxjbgd3x7qm4bFZjYix+FXRGl3mpWBkIU2Nt/wA7686i4gdo07gG4fnSk8id9LzDtC97XF9My3sTx3Hn7xR4qYuuvAWAHDu/3qJItmtwO7uPClhvj8+NWQ1VLShSeNKFQaHDzWuTw18qirPLiZFiVrZ3SNQWKopdgozHdvIuT37qEynI/wCzpbxF/hepOHwoVcLlcXZetBFzlkDjfusfVFgGvppfSsKkdGdu4jAt1sWIPZKlocxZGVhmtr6pIOhFxcWPf6G2DttcTFHMhurqG8xevNW0cMEYjTMdBYHVVHZ37hcKBY8q6P6KdshMO0eayxyuovbcbMN/7RHurfSldtjevNnpMleTHY7FrICiYlMMBrcMsLA24WBhYHvNdkm6XQINcRGDyzrfyBrhXTFsxmZbhJcZiZF32ZWEZVhfeLu1j41LEigaQnWm3mPjSpWyi/fUc45iFUqhCkkdhQTfeGZQGI8TpwtWWk66JE7DV2CKvcDct5FUHgTVahubVYYfCiUiwIQndvbM2gRbasSdBxq/k2RBDG7TuEKlUaJE66ZTIHt1gDpHGew2mdmGlwDpViMmE1uTerfYO1nh6xUykMoDKwBDZTdd/K5GnAkeFWg0qXs2IPJHE0gjWSWNWkPsAtlznUaKGJ3jjqK1Edg21spYosG2CkbDuYVZlS4LRzt2S6gZXI0Fn3k333NZjpFK+LkjixIJmw4JVQWMU0ZPbCqNUOg3ciNdDWX6VbRnGKePESmSXDt1CyLZezC2UWAAsCBw563pmHb0hVFElmVi6M9jkYK+ikgk5s1tb7l5VdRqNk4cx5BFPPFHI/V9SmWTNI7ZQpikPVWuBqd4YHUG9OYTAwyyLEwjRpB9XJGMsbsRcJJFdhE/ehAJuLE2Brdj7Sw+ImK7QbIpYOXiQlGGUKwfLcobAagEC1tBazXSJIBZMK0PZWMAxOWLZDcyLl1EjHKWuBl6vvNNMF0lgxCxKGiQr1kg/qwGjkSwZUYWJUqY2ym4B3VVdEcIGlZmjMmQXEIDZnazEABQT7NrjUZgRqK2W1umRxWyhBJGglikQs26Qt6qSodxNrqy8iOANVPRCYMwkGVWP1Dn9HJIL4eTnlZlyb/bNPZ6QMRhcaST9GZb+yuEUKo5L9XuG7eb871GbB4v9FL/AMuP5PzxtVrP0tmDFJIlVk7DBJZ01TQkjrDrpv8AO1NDpWx4S+7F4gfI039zFW2GxP6OT/AH8n5+NMmHEfo2/wAAfyVeL0rcfp/+blP+YGlf8YSc5x/44b/NHTj7FHHhsQxCrExJ/uF/k0qyn2K0Kq+IliS/a6vq1JKg8cuWw0IvcX4HSt16O9vtiMWkTF3QkBlkWK1ibaFArX4633bqyPTjHK82LCG5eURoB9iMgWA4L61r1RnsdgXBdkKuoOtlUsgJ0zLbQbhm3aiq8TEfYPii/hWh2zmw2IWaFtQkbqbaMMgjdX5gkMCOIbvqftzpSwfKmeMBVNssbEhkVgWL3N7Ecqln2SsgcQOMcR9zD/KwFNmRf0a+4t95NXzdJZTvdz+5D+FNt0hk+038EP4VnIvKpwyIzquqXIXMWBUX0uQBe3OtV0W2TApkOJOoLIsVtCw4lhrpcaeHvq/6WaVeqIBzlVByxi3bGui91WG1cdh4pHIZnLjMOryiNWcEkFSM1wcov+qd9704gpcThWAViDqPiP8AQr8aiiXLwO+9SYNok9ltxK5e6wIt8V8qRj+HjSLSjjEYWJt48KcV9Pz7iPGqxo6OFiv4VdCm3nxNAU5iYsrWve6o38aK9vdmt7qboCEco4P8asMLjLRCKSN7qSUkW4K5t4sdD7RB4XO/S1om0beth18Vdh871YpiowNcPKWsCVEg7IJ0v9XvrGKym0MTmsADuW5JuSQAt78NFS4udVBqC7cB51vWxkHGKUeBRvuX8inFnwx4TD/wkP8A6lWRK56Xbm1vE1q8NhkXD/W3uVZFIDZkYCJtCdPae9r/ADq5ZMOeLjxiP/SWqo6QYvNGhGQAmXsr6wbOilnvqpbqywU7rkjfVwU21cJl9RxIm/QG48wLjvFQsALta1WmysUif1ih1vazKCR3gn5HnVrNsyF5IyhAWUlSy2sqjWRreyQt9DUU7sV1jKxqCJpkYQsrBTFmH1diQQJJiCt/ZR1I9fSkixfW4WdcqgosT3A7TWlyFnJ1JvLv76kbew7SXxcAfLcSMt+3ACFEYsALxi2VZBpooIU6G7fYckhMyxkrtHByuoj7QGKhy4iWMBSbFmgzBeUoXeDaoyL4VkLqSp6shWKnMtybWUjQ631Gmml6jyGrPpPhDFiOrZSrLBhQykWIb6LDn0P62aqsC9EObSwjxPlkUqxWN7HflkjWRD71ZTUO9bjp7OMTh9n4231kkDYebTQyYRggbxZWB8qxWTw8xSgkkI3Eir7Y/SHEIwAfrV4RuVZb8OzMrL7gL94qhCVIw+HUnViv7pPyoLTaO2sSrszRCEyCxHVKoI36ArYeIqLsrHlDJdSVdCrBTbTepIsb5SAb6HTfXUejXSXBx4WPDSx4WbIuUs3W4d2HAOVV82+2tqyfTjE7PEsMmAjaMgkyhXRkIuuXqze4Pr3uOIqi72f0skkgzLH10sakSoMmcDS2IQMjZ1+0ttCSdxvVcOmo9qAN4xYc8f1VW9ZjFbXZZlljRFdbHPBmjDkDsyZUP1Uh1uFsP1RreTj+kokkYywQucxu1irH9+PJmP6zKTTuMXcnSuBt+Ew/7+EDf5ZqOPpLgx62CwR//GkX72rMS43DtuhkVuQlDLr4x318TTZKn+zmH7t/wp3GOodD+nuz4JQDhMPEpKlpI8ysCNxs8YuBcm2YeBqj6fYKOKZ8XgyjwyuW671uqY2OQKwtHzzMCdbC1tcWiru+sHjGfuNSIdovELJKQN1ir29+lXUwrD7RldTCz9ZGbs3WH1BvLB9446a35G9qvdq7YwK5AIIZ2EcamViSTkQKAQBvAUAnTUe+sni8aXPakBG+yggE9+guaj505n3D8TU3Fxfybcg9nC4UeMTn7xTD7cThhsOPCEf9TVUpJHfUOfDKPneliUexBfvclvlYfCppiZi9p5xm6tVtcLlVVF2BB9UX0FzqTraqmbEZvZUdygAaeG895vSsRMxPatpuAAsO6w0pn82qap3DvZg28rqBw01tU3H+z7/lVeiEa7vHSp+JlDBSN4FiBqN2hv7qRUWiFGTTseFdtVR2HMKx+QqheOPaU/3UPwhQfdTAqw25s1oDEHYEvBHJaxVkzD1HB1DAj3ix41XqaI3Y2BdbM59wA+ZNWOG2NGWLnOTp7VhvA9m3OrsYPup6HB91BX4LYcGh6oE95Zv8xIra7K2TEigLGgHIAWqNsrBi40+FaWFaohPsxDpkXXTgK4J6QsAuHxcsa3AzFrG1xe193sk3I7iK9H5q5r0kwavK7WDAkm5HPU/OiOKxzWG+rrY+EzE5WUEwzGzMAql4zHlYnQf1nHiQK10uzFHsDyFRsXgl6vEbg30R2XhrHJG5+AqYrPYTZuJWdJIJ4A4y2ZMVhc1soBXK0ozC1wQdD4GuvrOmBkz4GGNcNITNi0LsMqxf1bxBGyIt82a2h3HSuU4vZWHScYmR+qw5EU0UQXPNKCiMQqMeymbMudyBppm3V1Lo/j1khhkkkTAoDJi1wqMv1+FGQBp3YBY1MhbWwzBtBcA1ZiOddN8HC7R9TnBWMgqzK+SQzSs0aspIKrfKNTa1r6GsVFqa6Z02dWZcqxKEkxEWWI3C9XJ6rn9JZgx/btwNYqLBATAi+5nI32tu+JHlQSodnKFAcFyBYXN1S5JIXWw1JPvNOHARfYQe8D8/m9SMBhQbkpp5f7/fUiTAR8M48JGt893fw3G9BBGyMOfsjwcD76jYvo6MpaJrka5bggjuI4/nSrWTAKToJQOGbKfO4O788Kg7SwXVRNLmItYAFUsWJ0Hq8rm3IX7qCmTFyx9nrpVt7Odlt7r0cm0c3r2f9yPNb9orf40g7ZYizRROP1lb7mFV0j3JIAW53C9h3C5JqarQYDDYfFSJAgTDFv7WSSRwTwUKiHU8BbuvUPpNsb6JiHgLiTLlKuAVDAi98rDMOIsbbqb2LOsciyPEsmVgVVr5GbhnAILKN+Uande1W8sgnczSMpJtchFVUVbABUQAKoHAW8b6UFZ0VxgixcLsoK5srXAtZ+zfXcRe9+6tDBAMt7Wa5JNzqDzG7ffXvPdan2gmVdFsbi/cTrY2uAdO4/tb6EO02Atl82H5/Djag9Heji39GwnIrHM6i4HGRgLnlV/gyGZlaNLhmX1R7IU33brm3urJ+iXEF9kxG4UrLKL+ta0rW/3rW4NLuGDg3ZtyWuLMSL+LKb/q99BM+iR/o0/hH4UPokf6NP4R+FMthZLn64i9+G697W8/gOVGMK+n1p0JJ00IIGm/TUfE0GK9NcCrsmZgii0kF7C1x1yaG3DdXmxpjuC338/KvT/pTwRbZGLVmLWXrLkbsjK4HmteasMi5bk68Lbu+/HlQVrrblvta4I/1pWbS1reHGp80Ktpx5/jURI9Sp320Hev/bf4VMDGn+9aDo3hM0bNb27eQB++qVSWstxa9luQALnmdAO86VtujQVMOg5lid2+9jqNCNNO61ArZ2HkjfMhykixI5XBt8BVrjVZl7Qe/NZpVPxYilRzDuqX9LBFvwrQq9qhgUZXnXPGrlI53VVvcZQu7cBUVnU+tAHP2pBG7eZjvV8+U204feaUqJypo0qqOVSsOvcKcEdPwR99QWmAg51Z9Utqqomt7Rpb4kjiaBWMnABAPA8Kx+Nw/wAhWhnmJvfXxqumgBoMxiMPVPtEGNopr2Eb9rS90I7S2Ohv6uumtbDEYG9VOM2eGVkO4i1BzcYK+KcYoswhLyYh8xJljBAUqWN80hKIDc/1qncDS9obVkmw+KxD2zYiaGEADRIYQZGjQcEU/RgB3CtZj9m9fhTANJ4bFYwLHFRxhskWYC+dAz5AN4a29bjE7Qk6vBw4fUZ2knckHNq4iRbcvqST7qCwxTk4zGrrl+kysL/ryNr7wF+FVeNlyOHIuuUoddbk3FuPC/u31JlncYlXALCWDDkgC+djFGp3e0XDgW46WO6p/S7Cx4cxqyMXZfrY7jNC+nZfLdcx1OUWKggHW4ARl2tCVHWSz5ub3byz5vL5VFfGQ8MQ/gYwfko/PnUB+pIADuvitxTS4RGNlmT3hh91NEyXHIN0t9P0ZGvmKj/0tKBvGXlmaxvfeubXdyppsBb+1i/ipBwX95H/ABfgKCPK4JuFC9wvb41N2Vs7rTq6qB9okX8LA03hYYs31kmn6qFvIHLfzq7wmJwYGVsTiAvJcMh87z0giYrZ9mP1kXIavu5ep8N1RVYKbiVAeYMgO62/JVticTgLdifEHxwkH3zVBM+G4Szf8vCPlJVxEbOD/aA2B+3oONuzpSetUe2v/wC3u9n88LVJGIw/25f8GL+alRy4fnP7ljX7zTB0H0celLD7Pwhw80M0h612BjC5crWNjnYG9y3DlWmj9OmDBsuExGp49Xx/frixOH/v/NPwpQWE/pf41/lqYOzN6eMPwwk/kn3PTTenqL/5OXzUffXHnWIblk8DKPuQVEfFRjTqfN2PytThXW9vemiLE4afD/Q3tJE6G7gWzC1xv53rj8c5HD40Di14RJ5v/NRHGckjH7t/816miXhXLm3ZXvNz/lUnhQx6sCGvqCDmFt43HTj461HgeVt1h35VFvA2q4waRgAOMx5n8NwpqyahYPqpDY3BYgstt5Bv2dL8dwPu0rQYdSsaqBaw3cuNqOLKB2VA8ABSi9Y9tcYIysKC4phRhqBrWs4dl2kbjXcAPhr8b0kbVNRJI9abMNNMdzAp6O1NCnEFaRIMnLT3008rH2j50rLSSKkDDCkSLT5FJdaojGOmZsKG4e+pmWhkoMht7o40gzIbONzbvce7d5VkttY2cAJjsMsuU9lpBIDv3h42Usdd5J3117qqJ8MDoRpQcT/4oZFVYY0hyqUBiDdZlJYlRLIzSLqxPZYcr20rN47Glzc2HIDcByFd5x3RjCyath4ieZRb+dqpcT0CwTf2AHgWX5Gg4izXqVDJCBqjE8TcfKurSejrCcEYfvt95qM/o4w/DOP3qmDmEjx+yLe6mCe+unN6N4ecn8Q/CkH0dQjjL5j8KYOZA0omuiSdA4hu63zFRJOh8Y9mX+IfhTBhctFlrZv0WX7D+9v9KZPRb9U/xGmDJWowa1J6Knl8aA6KGmDMhzS1krTDorS16LigyMspNNhTW2To0lSY9gRjhTBgurPI0tIG5Gt8uxYx7NODZij2RTBi4I5eV6sIMExrS/QwOFKWG1MFbFhSBTghqwMNEIaYIBg8aHVnnU5oTTZjpggstJy1JdaQRTB2cU4lFQqh4Uk0KFQINJahQqgqWtFQoFvuocfKhQog231FmoUKKZakUKFAg0VChREeWoU1ChRUCaoj0dCgaNJoUKAqSaFCgKjoUKAUlqFCgbakmhQoo6AoUKBwU1PR0KiIElNGhQqq/9k="  
    },
    { 
      id: 1, 
      name: "Toyota", 
      model: "Camry", 
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Nxzqf7eoJV60DHmj1KqHQFF25dQG8gA9cQ&s"  ,
      LOGOimgUrl: "https://cdn.dribbble.com/users/26910/screenshots/2881046/gm-800x600-v2.gif"
    },
    { 
      id: 3, 
      name: "Ford", 
      model: "Mustang", 
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvMe4JSrvF5_bj2sMFI89ADuyBqiNM3aBByA&s"  
      ,LOGOimgUrl: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8HDRUSDw0NERURDg0QFhIQDQ8XDhIQFhUXFhYVFhkZHiggGBolHRUWIzEhJTUrLjouGB8zODMvOygtLisBCgoKDg0OGhAQGjAmHyUtLS0uLS0tLS0tLS4tLS0tLS0tLS0rLS0tLS0tLS0tLS0tLS0rLS0tLS0tKystLS0tLf/AABEIAQMAwgMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABgcCBAUDAf/EAEcQAAEDAwICBwQGCAEMAwAAAAEAAgMEBREGEiExBxNBUWFxgRQykaEVIiMzQlIWU2Jyc5Kx0vBDRFZlgoOVorLR4fEkNDX/xAAYAQEBAQEBAAAAAAAAAAAAAAAAAQIDBP/EACIRAQEAAgEDBQEBAAAAAAAAAAABAhEDIUFREhQiMWETBP/aAAwDAQACEQMRAD8ApBERVRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEX1rS7kCfIFB8RZdW78rv5SsSNvMEeYQEREBERAREQEREBERAREQEREBF9aC44AJJ4AAcSVL7RoKaSLr66VlDABndMQJHdwa3v8An4Im0PXUtenK67f/AF6SZ+e3bhn8zsBWPZLLTxDdbbX120ca+5P6ulBH4mh2D29gXy5XSjaSK69VFWR/m1rZ1dKP2RJyPnxXScdYucRQaGNGM11woaThnaZRJL4/VbxPplb1Dpq2P+7+lq0nH3FI5kZ8i4ArcZqinoeFusdHEeyaqJmnz38e3PiQvGfVd5rODrjIxp4bYGRRjyAY0LrjwW9mLzTy61Po/ZgxaYnPLjW1zWD1Bdj5Le+g6imGfYdMUncZ52OcPVvNcal0Vdrw3e91SGnjuqalzWn0Ls/JbDOiuf8AC+hJ8Khuc/Ba/ljPDN5L2buZouBv+mofCJkL8HycMrAzvHPVtqHgLfTkfJi0aro0uFPypGyfw5YyPmQuVU6YqaP7ygnb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ps9KH0PR/cJ2752RUcf6yslbGPQcXH4Lr2mw26FxbSQVN8nbncWsMNtjPZucfe+PZ2LWq9T2alfltJVXGT9dcJnPaT37XH5ELkXbpBr7gzq43spoxwbHTtDGtHcNuA3zABWLm1MU9u3s9Kxr75WQuEeOqtdD9SjZg8N+33z5ePeoXq3pCnvLRDTN9mp2DayNgDSGYwBgcG+mT4qGSSOlJLnFxPMuJJPqVisXLbUgiIo0IiICIiAiIgIiICzimfD7j3t/dcR/RYIg69Jqi4Uf3ddVAdxmc5vwdkLpRdIV1jGDVB4/K+GLb8gFFkRNJU7XU8n3lFaZPGS3xOPzT9Nc87VZvS2039iiqJs0lX6af6qs/wDw6m/sX0a6ljP2dvtDP3bdCD8WgKKIm6aSyTpFuZGI5o4R3RQtAx3YdkLQqtY3Oq96vqB/DcI/+gBcJE3TTYnrpqj7yeZ+ee+V5z8StdERRERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB//2Q=="
    },
    {
      id: 4,
      name: "Chevrolet",
      model: "Corvette",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl1wWpT8l0sKjiFubB4P_H1dt6kHsQHx-XkA&s",
      LOGOimgUrl: "https://media0.giphy.com/media/GdXrT2rUvayXhjfkU8/giphy.gif"
    },
    {
      id: 5,
      name: "BMW",
      model: "X5",
      imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_3AfjjXoU09lfPcDXGQi-j42BlxfQSi3MtQ&s",
      LOGOimgUrl: "https://i.pinimg.com/originals/e8/0b/14/e80b14d64b6be99d2173d774d4620bff.gif"
    }
  
  ];
  
    
  

  return (
    <div>

      
    
{/* <img style={{width:"100px", height:"200px"}} className='logo' src="https://i.pinimg.com/originals/46/1b/c3/461bc3941474e17e43c4bc0c2e4c3af5.gif" alt="logoimg" /> */}
<div className='mybox' >

{Cars.map((car) => (
  <div className='card' key={car.id}>
    <h2>{car.name}</h2>
    <img className='logo' src={car.LOGOimgUrl} alt={car.name} />
    <p>{car.model}</p>
    <img src={car.imgUrl} alt={car.name} />
  </div>
))}

</div>

    </div>
   
  )
}

export default App
