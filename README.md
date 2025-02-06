----

vinyl-landing/
├── index.html
├── css/
│   ├── reset.css
│   ├── style.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── form.js
│   └── animations.js
└── fonts/
    ├── OpenSans-Bold.ttf 
    ├── OpenSans-Regular.ttf 
    ├── Roboto-Bold.ttf
    ├── Roboto-Medium.ttf
    └── Roboto-Regular.ttf
    
---


1. პროექტში გამოყენებულია სწორი მნიშვნელობის HTML5 ტეგები, როგორიცაა header, nav, main, section და footer. 
ფაილი: index.html

ჰოვერ ეფექტები (Transitions, Hover Effects)
2. პროექტში გამოყენებულია ჰოვერ ეფექტები სხვადასხვა ელემენტებზე, მაგალითად ღილაკებსა და პროდუქტის ქარდებზე.
ფაილი: css/style.css

3. პროექტის სტილი სრულად განკუთვნილია სხვადასხვა ეკრანის ზომებისთვის, მაგალითად 1024px, 768px, 480px და 320px. 
ფაილი: css/responsive.css

GitHub Pages-ის ინტეგრაცია
4. პროექტი ატვირთულია GitHub-ზე და GitHub Pages-ის დახმარებით ხელმისაწვდომია ონლაინ. 

5. პროექტში გამოყენებულია Google Fonts-ის ფონტები. 
 ფაილი: index.html style.css

6. Seqmnilia kontaqtis forma. ფორმის ვალიდაცია სრულდება js/form.js-ში, სადაც ყველა ველიs (სახელი, ელ.ფოსტა და მესიჯი) შეამოწმება ხდება. 
გამოყენებულია regular expression ელ.ფოსტის შემოწმებისთვის, რაც უზრუნველყოფს, რომ ყველა აუცილებელი ველი შეყვანილიყო. 
ფაილები: index.html და js/form.js

7. გამართულია ბურგერ ბარი

8. ხდება სერვერიდან ინფორმაციის წამოღება (GET Method)
პროექტში API-დან მონაცემების წამოღება შესრულებულია fetch ფუნქციისა და async/await-ის მეშვეობით. 
API-დან მიღებული მონაცემები გამოაქვს ღონისძიებების (Featured Tech Events) ქარდებში. 
ფაილი: js/main.js

9. დაამატებითი ფუნქციონალი
პროექტში დამატებით გამოყენებულია  Scroll Up ღილაკის ფუნქციონალი და სექციების ანიმაციები ScrollReveal-ის მეშვეობით. 


10. პროექტში დამატებულია Cookies შეტყობინება, რომელიც გამოჩნდება გვერდის ქვედა ნაწილში, თუ მომხმარებელმა ჯერ არ დათანხმებია. "Accept" ღილაკის დაჭერის შემდეგ, localStorage-ში ინახება მნიშვნელობა "cookiesAccepted" და შეტყობინება დამალება ხდება. ეს ფუნქციები უზრუნველყოფს, რომ ერთხელ მონიშნული Cookies შეტყობინება კვლავ არ გამოვიდეს. 
ფაილები: js/main.js (cookies-ის ლოგიკა) და css/style.css (Cookies შეტყობინების სტილი)



https://marimiroshnikova.github.io/final_web/
