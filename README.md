📄 Project Overview
Denowatts Quote Automation একটি end-to-end automated testing project যা Playwright এবং JavaScript ব্যবহার করে তৈরি করা হয়েছে। এই প্রজেক্টের মূল লক্ষ্য হলো Denowatts প্ল্যাটফর্মের quote creation flow সম্পূর্ণভাবে স্বয়ংক্রিয়ভাবে পরীক্ষা করা, যাতে প্রতিটি ধাপ নির্ভুলভাবে এবং consistentভাবে কাজ করছে তা নিশ্চিত করা যায়।

প্রজেক্টে এমন টেস্ট স্ক্রিপ্ট রয়েছে যা ইউজারের মতোই ওয়েব অ্যাপ্লিকেশন ব্যবহার করে — login করা থেকে শুরু করে quote form পূরণ, ডেটা ভেরিফাই, এবং summary page চেক পর্যন্ত। এর ফলে manual testing এর সময় ও পরিশ্রম কমে যায় এবং software quality উন্নত হয়।
⚙️ Key Features
Playwright Test Automation: আধুনিক এবং দ্রুতগতির browser automation ফ্রেমওয়ার্ক ব্যবহার।

Page Object Model (POM): প্রতিটি পেজের জন্য আলাদা JS ফাইল ব্যবহার করে maintainable ও reusable কোড স্ট্রাকচার।

End-to-End Workflow Testing: Quote creation form এর সমস্ত ধাপ validate করা।

Dynamic Locators & Assertions: UI element গুলো সঠিকভাবে identify এবং validate করা।

Cross-Browser Support: Chromium, Firefox এবং WebKit এ টেস্ট চালানোর সুবিধা।

Detailed Test Reports: Playwright এর built-in HTML report এবং test results directory।

📂 Project Structure
tests/ → মূল টেস্ট ফাইল (যেমন quoteFlow.spec.js)

pages/ → Page Object Model ফাইল (যেমন summaryPage.js)

.gitignore → Unnecessary files (node_modules, test-results, reports ইত্যাদি) বাদ দেওয়ার জন্য।

package.json → Dependencies এবং scripts।
🎯 Benefits
Manual testing এর সময় ৭০%+ কমানো।

Bugs দ্রুত detect করা।

Continuous Integration (CI/CD) pipeline এ সহজে integrate করা যায়।



End-to-End Test Automation using Playwright

🛠 Tech Stack:

🎭 Playwright

⚡ JavaScript (Node.js)

📊 Cross-Browser Testing

📜 Detailed HTML Reports

✅ Features:

🔐 Secure Login Automation

📝 Quote Form Filling & Validation

🔍 Data Verification on Summary Page

🌐 Chromium, Firefox, WebKit Support

📂 Reports:

HTML, Trace Viewer, & Screenshot Logs
