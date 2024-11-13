
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Clock, Video, FileText, User, Shield, Link as LinkIcon } from 'lucide-react'

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Image src="/placeholder.svg" alt="Zinterview.ai logo" width={32} height={32} />
              <span className="hidden font-bold sm:inline-block">zinterview.ai</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link href="/about">About Us</Link>
              <Link href="/features">Features</Link>
              <Link href="/pricing">Pricing</Link>
              <Link href="/testimonials">Testimonials</Link>
            </nav>
          </div>
          <Button className="ml-auto" variant="default">Start Free Trial</Button>
        </div>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-full bg-orange-100 px-3 py-1 text-sm text-orange-700">
                  Cutting hiring time to half <Clock className="inline-block w-4 h-4 ml-1" />
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-3xl mx-auto">
                  AI Copilot for Talent Acquisition to hire faster, better
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Optimise your hiring process with AI-Automated Interviews
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-[#7C3AED] hover:bg-[#6D28D9]">Start Free Trial</Button>
                <Button size="lg" variant="outline">Book a demo</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
          <Image
            src="https://framerusercontent.com/images/MJpmJAHXad0ZMTPy5Qze5wUkI.png?scale-down-to=2048"
            alt="Live interview interface"
            width={2048}
            height={1024}
            className="rounded-lg w-full h-full"
          />
          {/* <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Powered by MERN Stack Technology
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Our platform leverages MongoDB, Express.js, React, and Node.js to deliver a seamless, real-time interview experience with advanced code evaluation capabilities.
                  </p>
                </div>
                <div className="space-y-2">
                  <ul className="grid gap-2 text-gray-500">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                      Real-time code execution and evaluation
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                      Multi-language support including Python, JavaScript, and more
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                      Integrated video conferencing with AI analysis
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-[#7C3AED]" />
                      Advanced code assessment and plagiarism detection
                    </li>
                  </ul>
                </div>
              </div>
              <div className="lg:pl-10">
                <div className="overflow-hidden rounded-xl border bg-white shadow-lg">
                  <div className="flex items-center justify-between border-b px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500" />
                      <div className="h-3 w-3 rounded-full bg-yellow-500" />
                      <div className="h-3 w-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-sm text-gray-500">Python Interview</div>
                  </div>
                  <div className="grid md:grid-cols-2">
                    <div className="p-4">
                      <div className="rounded-lg bg-gray-50 p-4">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-PqRvO8qlWWZsZROfKqkEFYRt7QVj2y.png"
                          alt="Live interview interface"
                          // width={400}
                          // height={300}
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                    <div className="border-l p-4">
                      <div className="space-y-4">
                        <div className="text-sm text-gray-500">Question: 2/15</div>
                        <h3 className="font-medium">Write a function called findMax that takes a list of integers as input and returns the maximum element in the list.</h3>
                        <div className="rounded-lg bg-gray-900 p-4">
                          <pre className="text-sm text-gray-100">
                            <code>{`def findMax(arr):
    return max(arr) if arr else None`}</code>
                          </pre>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Finding the best fit from thousands of applications has become like searching for a needle 🔍 in a haystack 🌾, which slows down your hiring process.
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 md:text-xl">
                Introducing Zinterview.AI, an AI-powered interviewer and a copilot that helps your HR teams to hire faster, better and make data-driven hiring decisions to hire & retain the best fit ✨
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Our offerings</h2>
            <p className="text-xl text-gray-500 mb-12">We established processes that save your time and improve efficiency</p>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Video className="h-12 w-12 text-[#7C3AED] mb-4" />
                <h3 className="text-xl font-bold mb-2">Multiple interview invites</h3>
                <p className="text-gray-500">Schedule interviews for hundreds of candidates on a single day and expedite your hiring process</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <FileText className="h-12 w-12 text-[#7C3AED] mb-4" />
                <h3 className="text-xl font-bold mb-2">AI Evaluation</h3>
                <p className="text-gray-500">Once the interview ends, our AI brings you a detailed evaluation report about the candidate on various parameters</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <User className="h-12 w-12 text-[#7C3AED] mb-4" />
                <h3 className="text-xl font-bold mb-2">Filter the best candidates</h3>
                <p className="text-gray-500">With our AI ranking the candidates based on their performance, your panel can save time filtering the best for next rounds</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LinkIcon className="h-12 w-12 text-[#7C3AED] mb-4" />
                <h3 className="text-xl font-bold mb-2">Hire versatile roles</h3>
                <p className="text-gray-500">Create openings for role from all domains such as Tech or Non-Tech</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-[#7C3AED] mb-4" />
                <h3 className="text-xl font-bold mb-2">Anti Cheating measures</h3>
                <p className="text-gray-500">Reduce the risk of cheating or fraudulent behaviour throughout the interview process without manual proctor</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <LinkIcon className="h-12 w-12 text-[#7C3AED] mb-4" />
                <h3 className="text-xl font-bold mb-2">Integrates with your existing Recruitment Stack</h3>
                <p className="text-gray-500">Using multiple tools can reduce efficiency, hence you can integrate Zinterview in your existing Recruitment Stack</p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">Streamline your recruitment process</h2>
            <p className="text-xl text-gray-500 mb-12">The health of the recruitment pipeline tells a lot about your company.<br />We help in increasing the speed of interview process in just 4 steps</p>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">1. Create an opening & Supply JD</h3>
                <p className="text-gray-500 mb-4">Paste the job description that you want to hire or ask AI to generate the Job Description for you</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DQkcfGwnSOXvCyAXcqkZ3SHDMAmWDA.png"
                  alt="Create opening interface with Generate JD button"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">2. Schedule the Interview call</h3>
                <p className="text-gray-500 mb-4">Schedule interviews for hundreds of candidates on a single day and expedite your hiring process</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DQkcfGwnSOXvCyAXcqkZ3SHDMAmWDA.png"
                  alt="Schedule interview interface showing candidate list"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">3. Our AI conducts the interview</h3>
                <p className="text-gray-500 mb-4">Paste the job description that you want to hire</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DQkcfGwnSOXvCyAXcqkZ3SHDMAmWDA.png"
                  alt="AI interview interface with recording button"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-2">4. Get comprehensive score card of each candidate</h3>
                <p className="text-gray-500 mb-4">Paste the job description that you want to hire</p>
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-DQkcfGwnSOXvCyAXcqkZ3SHDMAmWDA.png"
                  alt="Comprehensive score card interface"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold mb-4">Statistics</h2>
            <p className="text-xl text-gray-500 mb-12">Improving everyday</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mb-16">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 text-green-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5l0 14M5 12l14 0" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span>Reduced Interview cost per candidate by</span>
                </div>
                <span className="text-xl font-semibold">50%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 text-orange-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="8" />
                      <path d="M12 8v4l3 3" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span>Accuracy of interviews</span>
                </div>
                <span className="text-xl font-semibold">90%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 text-blue-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M20 21c0-4.418-3.582-8-8-8s-8 3.582-8 8" />
                    </svg>
                  </div>
                  <span>Interviews conducted on Zinterview</span>
                </div>
                <span className="text-xl font-semibold">20,000+</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 text-blue-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M20 21c0-4.418-3.582-8-8-8s-8 3.582-8 8" />
                    </svg>
                  </div>
                  <span>Reduced panel review time by</span>
                </div>
                <span className="text-xl font-semibold">50%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 text-green-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5l0 14M5 12l14 0" strokeLinecap="round" />
                    </svg>
                  </div>
                  <span>Reduced Time to hire a candidate</span>
                </div>
                <span className="text-xl font-semibold">75%</span>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 text-blue-500">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M20 21c0-4.418-3.582-8-8-8s-8 3.582-8 8" />
                    </svg>
                  </div>
                  <span>Candidate Satisfaction Rate</span>
                </div>
                <span className="text-xl font-semibold">95%</span>
              </div>
            </div>

            <div className="flex items-center justify-between border-t pt-16">
              <div>
                <h2 className="text-4xl font-bold mb-4">Data Security is our Priority</h2>
                <p className="text-gray-500 max-w-3xl">
                  You data is encrypted & securely hosted on AWS with a data retention policy of 180 Days preventing any exposure to your internal network.
                </p>
              </div>
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
                alt="AWS Logo"
                width={120}
                height={72}
                className="ml-8"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Our Impact</h2>
            <p className="text-xl text-gray-500 mb-12">Join the group of partners who have successfully established AI-enabled processes in their recruitment pipeline to make it efficient</p>
            <div className="grid gap-8 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Vishak Bharadwaj" />
                      <AvatarFallback>VB</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Vishak Bharadwaj</h3>
                      <p className="text-sm text-gray-500">Talent Acquisition Head, Monocept Technologies</p>
                    </div>
                  </div>
                  <p className="text-gray-500">Using Zinterview.ai has cut our time to close a position by 50%. The platform&apos;s ability to handle multiple interviews at once and provide detailed evaluation reports has made our hiring process much more efficient. It&apos;s a practical and effective tool for our talent acquisition team.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Rashmi Rammohan" />
                      <AvatarFallback>RR</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Rashmi Rammohan</h3>
                      <p className="text-sm text-gray-500">Co-founder, FlexiBees</p>
                    </div>
                  </div>
                  <p className="text-gray-500">The interview reports are detailed with skill-wise ratings and are very comprehensive. Overall, we are very satisfied with Zinterview; it is an excellent tool for screening candidates.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Avatar>
                      <AvatarImage src="/placeholder.svg" alt="Vijender Jain" />
                      <AvatarFallback>VJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-bold">Vijender Jain</h3>
                      <p className="text-sm text-gray-500">CEO Zenius IT Services Pvt. Ltd.</p>
                    </div>
                  </div>
                  <p className="text-gray-500">We had open positions for a few niche skills for our new ACD project but lacked in-house expertise to confidently interview candidates. Zinterview.ai came in handy. The tool was able to successfully and comprehensively evaluate candidates, and we were able to close the positions. By the way, the hires have turned out great.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="flex flex-col justify-center items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12">Pricing & Plans</h2>
            <p className="text-xl text-gray-500 mb-12">We offer the most affordable pricing in the industry which is customised to your recruitment needs.</p>
            <div className='flex flex-row items-center justify-center'>
              <div className="w-2/3 grid gap-4 grid-cols-3">
                <Card className="mt-6 bg-secondary">
                  <CardHeader className="flex flex-row gap-2 items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" id="svg66624336_1847">
                      <g clip-path="url(#svg66624336_1847_clip0_891_9632)">
                        <path d="M4 3.50391C4.37288 3.50392 4.73239 3.64283 5.00842 3.89353C5.28445 4.14422 5.4572 4.48875 5.493 4.85991L5.5 5.00391V17.5039H20C20.3852 17.5041 20.7556 17.6525 21.0344 17.9183C21.3132 18.1841 21.479 18.5471 21.4975 18.9318C21.516 19.3166 21.3858 19.6937 21.1338 19.9851C20.8818 20.2765 20.5274 20.4597 20.144 20.4969L20 20.5039H4C3.62712 20.5039 3.26761 20.365 2.99158 20.1143C2.71555 19.8636 2.5428 19.5191 2.507 19.1479L2.5 19.0039V5.00391C2.5 4.60608 2.65804 4.22455 2.93934 3.94325C3.22064 3.66194 3.60218 3.50391 4 3.50391ZM20.193 6.32191C21.539 6.32191 22.213 7.94891 21.261 8.89991L15.692 14.4689C15.5434 14.6175 15.367 14.7354 15.1729 14.8158C14.9787 14.8963 14.7706 14.9377 14.5605 14.9377C14.3504 14.9377 14.1423 14.8963 13.9481 14.8158C13.754 14.7354 13.5776 14.6175 13.429 14.4689L11.025 12.0649L8.55 14.5399C8.41067 14.6792 8.24527 14.7896 8.06325 14.865C7.88123 14.9403 7.68615 14.9791 7.48915 14.979C7.29215 14.979 7.09709 14.9401 6.9151 14.8647C6.73311 14.7893 6.56777 14.6787 6.4285 14.5394C6.28923 14.4001 6.17877 14.2347 6.10343 14.0527C6.02808 13.8706 5.98933 13.6756 5.98937 13.4786C5.98942 13.2816 6.02827 13.0865 6.1037 12.9045C6.17913 12.7225 6.28967 12.5572 6.429 12.4179L9.894 8.95391C10.194 8.65407 10.6008 8.48565 11.025 8.48565C11.4492 8.48565 11.856 8.65407 12.156 8.95391L14.561 11.3589L16.742 9.17691C16.4347 9.0304 16.1864 8.78371 16.0378 8.47738C15.8893 8.17104 15.8494 7.82329 15.9246 7.49127C15.9999 7.15925 16.1859 6.86271 16.452 6.65038C16.7181 6.43805 17.0486 6.32257 17.389 6.32291L20.193 6.32191Z" fill="#347FED"></path>
                      </g>
                      <defs>
                        <clipPath id="svg66624336_1847_clip0_891_9632">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.00390625)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">Pay As You Go</h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2 mb-6">
                      <li>Beneficial if you conduct a small number of interviews or there is high seasonality.</li>
                      <li>Pay only for what you use without long-term commitments.</li>
                      <li>Ideal for startups or small businesses with fluctuating hiring demands.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-secondary">
                  <CardHeader className="flex flex-row gap-2 items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" id="svg-1974934000_2103">
                      <g clip-path="url(#svg-1974934000_2103_clip0_891_9658)">
                        <path d="M10.0774 2.61708C10.4154 1.85708 11.4564 1.82008 11.8644 2.50308L11.9234 2.61708L12.9654 4.96208C13.8753 7.00899 15.3884 8.72934 17.3024 9.89308L17.6244 10.0821L19.4744 11.1221C19.6215 11.2044 19.7456 11.3222 19.8355 11.4648C19.9253 11.6074 19.9781 11.7702 19.9889 11.9384C19.9998 12.1066 19.9683 12.2749 19.8975 12.4278C19.8267 12.5808 19.7187 12.7136 19.5834 12.8141L19.4754 12.8841L17.6244 13.9241C15.6718 15.0224 14.1011 16.6908 13.1224 18.7061L12.9654 19.0441L11.9234 21.3891C11.5854 22.1491 10.5444 22.1861 10.1364 21.5031L10.0774 21.3891L9.03539 19.0441C8.12552 16.9972 6.61241 15.2768 4.69839 14.1131L4.37639 13.9241L2.52639 12.8841C2.37932 12.8017 2.25519 12.6839 2.16532 12.5413C2.07545 12.3987 2.02269 12.2359 2.01186 12.0677C2.00102 11.8995 2.03245 11.7313 2.10328 11.5783C2.17412 11.4254 2.2821 11.2926 2.41739 11.1921L2.52539 11.1221L4.37639 10.0821C6.32901 8.98372 7.8997 7.31534 8.87839 5.30008L9.03539 4.96208L10.0774 2.61708ZM19.2214 2.12408C19.7178 3.25168 20.5643 4.18934 21.6354 4.79808C21.7954 4.88808 21.7954 5.11808 21.6354 5.20808C20.5637 5.81691 19.7169 6.75496 19.2204 7.88308C19.2014 7.92555 19.1705 7.96161 19.1315 7.98691C19.0924 8.01222 19.0469 8.02568 19.0004 8.02568C18.9539 8.02568 18.9083 8.01222 18.8693 7.98691C18.8303 7.96161 18.7994 7.92555 18.7804 7.88308C18.2837 6.75533 17.4369 5.81765 16.3654 5.20908C16.3292 5.18845 16.2992 5.15862 16.2782 5.12261C16.2573 5.08661 16.2463 5.04571 16.2463 5.00408C16.2463 4.96244 16.2573 4.92154 16.2782 4.88554C16.2992 4.84954 16.3292 4.81971 16.3654 4.79908C17.4372 4.18999 18.2841 3.25157 18.7804 2.12308C18.7994 2.08061 18.8303 2.04454 18.8693 2.01924C18.9083 1.99393 18.9539 1.98047 19.0004 1.98047C19.0469 1.98047 19.0924 1.99393 19.1315 2.01924C19.1705 2.04454 19.2014 2.08061 19.2204 2.12308L19.2214 2.12408Z" fill="#F78703"></path>
                      </g>
                      <defs>
                        <clipPath id="svg-1974934000_2103_clip0_891_9658">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.00390625)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">Free Trial</h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2 mb-6">
                      <li>Enjoy an unlimited free trial for a couple of weeks.</li>
                      <li>Test Zinterview with various roles and candidates to see how it works for you.</li>
                      <li>Access our dedicated support team to assist you throughout the trial.</li>
                      <li>To get started, provide a few JDs and resumes. We will create the openings and schedule the interviews.</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="mt-6 bg-secondary">
                  <CardHeader className="flex flex-row gap-2 items-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" id="svg-862034931_1421">
                      <g clip-path="url(#svg-862034931_1421_clip0_891_9690)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.1849 3.86791C8.12959 3.64677 8.1254 3.41593 8.17266 3.19292C8.21992 2.96992 8.31738 2.76062 8.45765 2.58093C8.59791 2.40124 8.77728 2.25588 8.98214 2.1559C9.187 2.05591 9.41195 2.00393 9.6399 2.00391H14.3599C14.5879 2.00393 14.8128 2.05591 15.0177 2.1559C15.2225 2.25588 15.4019 2.40124 15.5422 2.58093C15.6824 2.76062 15.7799 2.96992 15.8271 3.19292C15.8744 3.41593 15.8702 3.64677 15.8149 3.86791L15.0369 6.97991L16.2439 11.0039H13.9999C13.7347 11.0039 13.4803 11.1093 13.2928 11.2968C13.1053 11.4843 12.9999 11.7387 12.9999 12.0039C12.9999 12.2691 13.1053 12.5235 13.2928 12.711C13.4803 12.8985 13.7347 13.0039 13.9999 13.0039H16.8439L17.7639 16.0699C17.8786 16.4519 17.8765 16.8595 17.7579 17.2403C17.6392 17.6211 17.4094 17.9577 17.0979 18.2069L12.6249 21.7849C12.4475 21.9269 12.2271 22.0043 11.9999 22.0043C11.7727 22.0043 11.5523 21.9269 11.3749 21.7849L6.9019 18.2069C6.59045 17.9577 6.36062 17.6211 6.24195 17.2403C6.12327 16.8595 6.12116 16.4519 6.2359 16.0699L8.9629 6.97991L8.1849 3.86791ZM13.7199 4.00391L13.2199 6.00391H10.7819L10.2819 4.00391H13.7199Z" fill="#A069E6"></path>
                      </g>
                      <defs>
                        <clipPath id="svg-862034931_1421_clip0_891_9690">
                          <rect width="24" height="24" fill="white" transform="translate(0 0.00390625)"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <h3 className="text-2xl font-bold mb-4">Custom Package</h3>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="space-y-2 mb-6">
                      <li>Offers significant discounts on monthly minimum commitments.</li>
                      <li>Beneficial if you are hiring year-round and conduct at least a minimum number of interviews.</li>
                      <li>Lower per-interview cost compared to pay-per-use, providing better value for high-volume hiring.</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Don&apos;t just take our word,<br />Try it yourself</h2>
            <p className="text-gray-400">Share your email to setup a meet with our Sales Team</p>
            <div className="w-full max-w-sm space-y-2">
              <Input type="email" placeholder="yourname@example.com" />
              <Button className="w-full bg-white text-black hover:bg-gray-200">Submit</Button>
            </div>
            <div className="flex space-x-4">
              <Link href="/terms" className="text-sm text-gray-400 hover:underline">Terms & Conditions</Link>
              <Link href="/privacy" className="text-sm text-gray-400 hover:underline">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}