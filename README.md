# Cere Contributor Community

Welcome to the Cere Contributor community repository! This is where you can find meta-discussion, document templates, community guidelines, instructions on how to join the community and how to contribute!

To follow the latest discussions, join us on discord -> https://cere.network/discord
The latest developer documentation can be found at https://docs.cere.network & https://portal.cere.network

You can also follow our important activities via:
* Contributor Forum - https://github.com/Cerebellum-Network/contribute/discussions
* Community support - https://t.me/ceretroubleshooting
* Community Telegram - https://t.me/cereofficial
* Cere Announcements - https://t.me/cerenetwork
* Cere Network blog: https://cere.network/blog/
* Youtube: Cere Network
* Twitter: @CereNetwork - https://twitter.com/cereofficial

# Contributor Grants

## About
Cere Grants offers financial rewards for solving specific issues in Cere’s open-source codebases based on complexity. From first-time onboarding missions, to full-features, bug-fixes and new integrations and research projects, each grant comes with its own set of privileges and responsibilities.

Our dedicated teams within Cere meticulously design these contributor focused grants to align with the vision and goals set-out on the Cere Roadmap. From first-time to confirmed contributors to full-features and bug-fixes, each grant comes with its own set of privileges and responsibilities. ℹ️ Learn more.

Cere's Contributor Grants program offers financial incentives for working on specific problem sets related to Cere codebases. Each task is designed to drive the Cere ecosystem forward, aligned with the objectives of the Cere Contributor Guilds—Angel, Devel, Ops, and Tester. Contributor Grants serve as a bridge between the community's skills and the ecosystem's needs, fostering a culture of open collaboration, knowledge sharing, and collective growth, while  also serving as a platform for developers to showcase their skills and potentially collaborate with us on future projects.

Cere is interesetd in your suggestions for new Grant Proposals too. Check the [Cere Tracks](https://github.com/Cerebellum-Network/grant-program/blob/master/documentation/TRACKS.md) to learn more about the area's the Cere Community is interested to focus on first.

We're thrilled that you're interested in working on helping us improve the Cere ecosystem, one grant at a time!


## Guidelines

### Beyond Monetary Rewards

While financial incentives are a part of the program, our primary aim is to foster a community of contributors who are genuinely interested in enhancing the Cere ecosystem. We see this as a mutually beneficial relationship where contributors can also become potential future collaborators.

### Quality Over Quantity

We expect high-quality code submissions. Please only undertake grants that align with your skill set, as we cannot accept or reward subpar contributions. While our development team is available for limited support, this program is not designed to serve as a learning platform for beginners. Check our [Cere Onboarding Missions](https://www.notion.so/Onboarding-Missions-dc2ca746ac1b426497d6c850abfa6005?pvs=21) to learn more about our incentivized onboarding program.

### Code of Conduct
We also do have a code of conduct that we take pretty seriously. Based on this, we may need to [block users](https://github.blog/2016-04-04-organizations-can-now-block-abusive-users/) who don't comply with our rules. But we're sure you'll do great!

💜 Good luck with your application! 💜

## Support
Our Grants Programs provide funding and feedback on delivered milestones. While we do not guarantee hands-on support as part of a grant, we will do our best to help you face specific issues during development and direct you to the correct resources. If you need more hands-on support, you can also reach out to us at `community@cere.io` to discuss additional options available. We are happy to work out a plan to get you the hands-on technical, ecosystem, and strategic long-term support and access to extensive resources you need.

You can find general documentation and more information on Cere Network and the DDC on the [Cere’s Community Portal](https://portal.cere.network) and the [Contributor FAQ](https://portal.cere.network/FAQ-47632bf4e3ff45ab999e66463d634fbf), and we encourage you to join the [Cere Contributor’s Discord](https://www.notion.so/5fd4b7fa6ddf43309e167154477d59d2?pvs=21) to get help with specific issues or stay up to date with the most recent developments.

## Application Process

### Choose RFP  OR Come with your RFP
Click  [here](request_for_proposals/rfp1/README.md) for open proposals.

### Application Submission
1. Fork [this repository](https://github.com/Cerebellum-Network/grant-program) (branch: `master`)  or `git pull` to update your existing repo.
2. Create a new branch called `Grant App - Project Name`.
3. Create a copy of the `application_template.md` file in the `applications/` directory of your newly created fork.
4. Name the new file after your project: `project_name.md`.
5. Fill out the template with the details of your project.
   💡 That file should contain ALL necessary information for complete evaluation of the proposed grant! And the more information, the faster the review.
6. Put the file in corresponding RFP folder
7. Review the `Terms and Conditions` file inside the Documents folder.
8. Once you're done, create a pull request.

   ⚠️ By initiating a pull request, you are indicating you have ready and accepted the terms and conditions as provided.

9. At this stage, the pull request should only contain *one new file* — the markdown file you created from the template.

### Application Review
1. The Cere Foundation Grants Committee will issue comments and request changes on the pull request.
2. Clarifications and amendments made in the comments need to be included in the application. You may address feedback by modifying your application directly and leaving a comment once you're done.
3. The application is accepted when all requested changes are addressed, and the terms and conditions have been agreed upon.
4. The application will be subject to automatic rejection after 2 weeks of inactivity.
   Unless specified otherwise, the day on which it is accepted will be considered the starting date of the project, and will be used to estimate delivery dates.

### Onboarding
We will review the application and will provide you with feedback as soon as possible.

If your application is approved, please proceed as follows:
1.	Quick Start Guide: Refer to the quick start guide provided in the corresponding RFP README for detailed instructions. For example, you can review the guide here: [Developer Console Topup Guide](https://github.com/Cerebellum-Network/cluster-apps/blob/dev/apps/developer-console/developer_console_topup.md#quick-start-guide-).
2.	Repository Setup: Clone the corresponding repository to your local environment.
3.	Development: Begin implementing the required changes as outlined in the documentation.
4.	Pull Request: Once your changes are complete, submit a pull request. The repository maintainer will review your PR and provide further feedback if necessary.

### Changes to a Grant after Approval
Accepted grant applications can be amended at any time. However, doing so necessitates a re-evaluation by the committee and requires the same number of approvals as a new application. If your application has been accepted and during development you find that your project significantly deviates from the original specifications, please open a new pull request that modifies the existing application. This also applies in case of significant delays.

- If there are significant changes to your delivery schedule, please open a pull request with an updated timeline.
- If your deliveries are delayed by more than 2 weeks without justification or further communication, the committee reserves the right to initiate the Grant Termination Process.

### Grant Termination
To initiate grant termination, a member of the Grant Committee (or the grant recipient themselves) can create a Termination pull request (PR) for review and response from the committee and corresponding grant recipients. The termination PR must

- REMOVE the originally accepted application file
- Include a summary of the reasons for termination, including potential steps for remediation.

The proposed termination PR will be open for review and comments for 2 weeks.

After this period, if the termination proposal receives 3 approvals, regardless of level, the termination PR will be accepted, and the grant will be terminated.

All funding and other services will be terminated immediately, with no exceptions. If the proposed project is to be reconsidered, a new application process will be required.


## The Contributor Program
The Cere Contributor Program offers valuable benefits to developers interested in building decentralized applications on the platform, providing free public goods such as educational resources, tools and token. Participants receive dedicated support through forums, opportunities for grants and funding, and access to educational events, fostering an innovative and collaborative environment for development on Cere.

You can already [run a validator node](https://docs.cere.network/node/install-and-update/start-a-node) for the Cere Blockchain Network to start earning [$CERE Token](https://www.notion.so/681bb1442f084a438be681e8df244335?pvs=21).

## How to Build your First dApp on the Decentralized Data Cloud?
**Get started** building your decentralized data dApps!: [Follow this guide to get started!](https://github.com/Cerebellum-Network/grant-program/blob/master/documentation/GETSTARTED.md)



## Cere Network Contributor Forum
- Ask questions
- Collect community feedback feature proposals
- Share your projects and find additional funding or contributors
- Discuss upcoming events and ecosystem news

## GitHub issues
If you have found issues or would like to improve Cere project code, documentation or anything else really, we strongly enourage you to file a detailed issue.

### Useful links
If you're looking for Cere Network resources, check the following
* Official website: https://cere.network
* Official documentation: https://docs.cere.network

### License
Apache 2.0.
